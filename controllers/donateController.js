const donateService = require('../services/donateService');
const userService = require('../services/userService');
const addressService = require('../services/addressService');
const { check, validationResult } = require('express-validator');
const stripe = require('../configs/stripe');
const endpointSecret = process.env.STRIPE_ENDPOINT_SECRET;

//import provinces
const provinces = require('../configs/provinces');

// get donate page
const getDonate = async (req, res) => {
  const userid = req.session.userid;

  try {
    if (userid) {
      const user = await userService.getUserById(userid);
      return res.render('donate/donate',
        {
          user,
          provinces
        }
      );
    } else {
      res.render('donate/donate',
        {
          provinces
        });
    }
  } catch (error) {
    console.log('Error in getting donate page:', error.message);
    return res.render('home/error', { message: 'Sorry, Error in getting donate page.' });
  }
}

// process donate post
const processDonate = async (req, res) => {
  const { userid, uname, email } = req.body;
  try {
    //get user info
    const user = await userService.getUserById(userid);
    if (!user) {
      return res.render('home/error', { message: 'Sorry, user not found.' });
    }

    // Validate the request
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      //set error messages for each field
      const errorMessages = {};
      errors.array().forEach(error => {
        errorMessages[error.path] = error.msg;
      });

      return res.render('donate/donate', {
        errors: errorMessages,
        provinces,
        user
      });
    }

    // Determine the amount
    const presetAmount = req.body.amount;
    const customAmount = req.body.customAmount;
    let amount = 0;

    if (customAmount && customAmount > 0) {
      amount = customAmount;
    } else {
      amount = presetAmount;
    }

    if (!req.userHasAddress) {

      const { fname, lname, phone, street, postal, city, province } = req.body;
      //create address
      const address = await addressService.createAddress({ fname, lname, phone, street, city, province, postal });
      const addressid = address._id;

      //update user info with address id
      await userService.updateUserAddress(userid, addressid);
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'cad',
          product_data: {
            name: 'Donation',
          },
          unit_amount: amount * 100,
        },
        quantity: 1,
      }],
      mode: 'payment',
      customer_email: email,
      metadata: {
        userid,
        uname,
        amount
      },
      success_url: `${req.headers.origin}/donate/success?amount=${amount}`,
      cancel_url: `${req.headers.origin}/donate`,
    });

    res.redirect(303, session.url);

  } catch (error) {
    console.log('Error in processing donate:', error.message);
    return res.render('home/error', { message: 'Sorry, Error in processing donate.' });

  }
}

//get success page
const getSuccess = async (req, res) => {

  const amount = req.query.amount;
  const userid = req.session.userid;
  const user = await userService.getUserById(userid);
  if (!user) {
    return res.render('home/error', { message: 'Sorry, user not found.' });
  }

  res.render('donate/success', { user, amount });
}

//handle webhook
const handleWebhook = async (req, res) => {
  const sig = req.headers['stripe-signature'];

  try {
    // Parse and verify Stripe webhook event
    let event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    let donateData;

    // Set donation data based on event type
    if (event.type == 'checkout.session.completed') {
      const session = event.data.object;

      donateData = {
        userid: session.metadata.userid,
        amount: session.amount_total / 100,
        createAt: new Date(session.created * 1000),
        status: 'completed'
      }
    } else {
      const session = event.data.object;
      donateData = {
        userid: session.metadata.userid,
        amount: session.amount_total / 100,
        createAt: new Date(session.created * 1000),
        status: 'failed'
      }
    }

    //save donate data
    await donateService.saveDonate(donateData);
  } catch (error) {
    // handle error
    console.log('Error saving donate:', error.message);
    return res.render('home/error', { message: 'Sorry, Error in saving donation.' });
  }
  // Return success response to Stripe after successful handling
  res.json({ received: true });
}


module.exports = {
  processDonate,
  getDonate,
  getSuccess,
  handleWebhook
}