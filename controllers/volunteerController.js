const { validationResult } = require('express-validator');
const volunteerService = require('../services/volunteerService');
const eventService = require('../services/eventService');
const provinces = require('../configs/provinces');


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
  // Validate the request
  const errors = validationResult(req);

  const { eventid, userid, name, email, phone, street, postal, city, province, intro } = req.body;
  const event = await eventService.getEventById(eventid);

  const data = {
    eventid,
    userid,
    name,
    email,
    phone,
    street,
    postal,
    city,
    province,
    intro
  };

  console.log('data', data);

  if (!errors.isEmpty()) {
    //set error messages for each field
    const errorMessages = {};
    errors.array().forEach(error => {
      errorMessages[error.path] = error.msg;
    });

    // render volunteer page with error message
    return res.render('v-event/volunteer',
      {
        data,
        event,
        provinces,
        errors: errorMessages
      });
  }

  try {
    // Create a new volunteer
    const volunteer = await volunteerService.createVolunteer(data);

    //render volunteer page with success message
    return res.render('v-event/vMessage',
      {
        data,
        event,
        success: 'Volunteer saved successfully.'
      });

  } catch (error) {
    console.log('error in saving new volunteer', error.message);

    //render volunteer page with error message
    return res.render('v-event/volunteer',
      {
        data,
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