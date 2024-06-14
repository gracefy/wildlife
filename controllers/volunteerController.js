const { validationResult } = require('express-validator');
const volunteerService = require('../services/volunteerService');
const eventService = require('../services/eventService');
const provinces = require('../configs/provinces');


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
    return res.render('v-event/volunteer',
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
  saveVolunteer
}