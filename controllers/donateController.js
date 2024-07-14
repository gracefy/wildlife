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
  if (userid) {
    const user = await userService.getUserById(userid);
    return res.render('donate/donate',
      {
        user,
        provinces
      }
    );
  }

  res.render('donate/donate',
    {
      provinces
    });
}

// process donate post
const processDonate = async (req, res) => {
  const { userid, uname, email } = req.body;
  const user = await userService.getUserById(userid);

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

  try {

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
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

//get success page
const getSuccess = async (req, res) => {
  const amount = req.query.amount;
  const userid = req.session.userid;
  const user = await userService.getUserById(userid);

  res.render('donate/success', { user, amount });
}


// get donate list
const getDonateList = async (req, res) => {
  const userId = req.user.id;
  try {
    const donates = await donateService.getDonatesByUserId(userId);
    res.render('/donate', { donates });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

//handle webhook
const handleWebhook = async (req, res) => {
  const sig = req.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (error) {
    console.log(error);
    return res.status(400).send(`Webhook Error: ${error.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;

    const donateData = {
      userid: session.metadata.userid,
      amount: session.amount_total / 100,
      createAt: session.created,
      status: 'completed'
    }

    try {
      await donateService.saveDonate(donateData);
    } catch (error) {
      console.log(error);
    }
  }

  res.json({ received: true });
}


module.exports = {
  getDonateList,
  processDonate,
  getDonate,
  getSuccess,
  handleWebhook
}