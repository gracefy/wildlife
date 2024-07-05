const { validationResult } = require('express-validator');
const volunteerService = require('../services/volunteerService');
const eventService = require('../services/eventService');
const addressService = require('../services/addressService');
const userService = require('../services/userService');
const provinces = require('../configs/provinces');
const isAddressExist = require('../middleware/isAddressExist');


// get volunteer page
const applyVolunteer = async (req, res) => {
  const eventid = req.params.eventid;
  const userid = req.session.userid;

  try {
    const event = await eventService.getEventById(eventid);

    if (!event) {
      return res.render('v-event/vMessage', {
        eventError: 'Event not found.'
      });
    }
    //get volunteer data if user already registered for this event
    const volunteer = await volunteerService.getRegisteredVolunteer(eventid, userid);
    const user = await userService.getUserById(userid);

    if (volunteer) {
      return res.render('v-event/vMessage', {
        event,
        volunteer,
        existError: 'You have already registered for this event.'
      });
    }
    // pass the data to the view
    res.render('v-event/volunteer', {
      event,
      user,
      provinces
    });

  } catch (error) {
    return res.render('v-event/vMessage', {
      eventError: 'Error in getting event detail.'
    });
  }
}


//save volunteer
const saveVolunteer = async (req, res) => {
  const { userid, eventid, intro } = req.body;

  // Validate the request
  const errors = validationResult(req);

  const event = await eventService.getEventById(eventid);
  const user = await userService.getUserById(userid);

  if (!errors.isEmpty()) {
    //set error messages for each field
    const errorMessages = {};
    errors.array().forEach(error => {
      errorMessages[error.path] = error.msg;
    });

    // render volunteer page with error message
    return res.render('v-event/volunteer',
      {
        data: req.body,
        user,
        event,
        provinces,
        errors: errorMessages
      });
  }

  try {
    if (!req.userHasAddress) {

      const { fname, lname, phone, street, city, province, postal } = req.body;

      //create address
      const address = await addressService.createAddress({ fname, lname, phone, street, city, province, postal });
      const addressid = address._id;

      //update user info with address id
      await userService.updateUserAddress(userid, addressid);
    }

    // Create a new volunteer
    await volunteerService.createVolunteer({ event: eventid, user: userid, intro: intro });

    //render volunteer page with success message
    return res.render('v-event/vMessage',
      {
        data: req.body,
        event,
        success: 'Volunteer saved successfully.'
      });

  } catch (error) {
    console.log('error in saving new volunteer', error.message);

    //render volunteer page with error message
    return res.render('v-event/volunteer',
      {
        data: req.body,
        user,
        event,
        provinces,
        dberror: 'Error in saving volunteer, please try again.'
      });
  }
}

module.exports = {
  saveVolunteer,
  applyVolunteer
}