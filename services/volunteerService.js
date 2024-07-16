const Volunteer = require('../models/volunteerModel');
const Event = require('../models/eventModel');


//import moment
const moment = require('moment');
const formatDateTime = (dateTime) => {
  return moment(dateTime).format('YYYY-MM-DD hh:mmA');
}


// Get all volunteers
const getAllVolunteers = async () => {
  return await Volunteer.find()
    .sort({ createAt: -1 }) //sort by createAt in descending order
    .populate('event') //populate the eventid field
    .populate('user'); //populate the userid field
}

// Get volunteers by eventid
const getVolunteersByEvent = async (eventid) => {
  return await Volunteer.find({ event: eventid })
    .sort({ createAt: -1 }) //sort by createAt in descending order
    .populate('event') //populate the eventid field
    .populate('user'); //populate the userid field
}

// Get volunteers by userid
const getVolunteersByUser = async (userid) => {
  let volunteers = await Volunteer.find({ user: userid })
    .sort({ createAt: -1 }) //sort by createAt in descending order
    .populate('event') //populate the eventid field
    .populate({
      path: 'user',
      populate: { path: 'address' }
    }); //populate the userid field

  if (volunteers.length > 0) {
    volunteers = volunteers.map(volunteer => {
      if (volunteer.event) {
        // Format event startTime and endTime
        const event = {
          ...volunteer.event.toObject(),
          startTime: formatDateTime(volunteer.event.startTime),
          endTime: formatDateTime(volunteer.event.endTime)
        };
        return {
          ...volunteer.toObject(),
          event
        };
      }
      return volunteer.toObject();
    });
  }
  return volunteers;

}

// Get volunteer by id
const getVolunteerById = async (id) => {
  const volunteer = await Volunteer.findById(id)
    .populate('event')
    .populate({
      path: 'user',
      populate: { path: 'address' }
    });

  return volunteer;
}

// Check if user is registered for the event
const getRegisteredVolunteer = async (eventid, userid) => {
  const volunteer = await Volunteer
    .findOne({ event: eventid, user: userid })
    .populate('event')
    .populate('user');
  return volunteer;
}

// Create volunteer
// service
const createVolunteer = async (volunteerData) => {
  try {
    return await Volunteer.create(volunteerData);
  } catch (error) {
    console.error('Error in createVolunteer service:', error);
    throw error;
  }
};


// Update volunteer
const updateVolunteer = async (id, volunteerData) => {
  return await Volunteer.findByIdAndUpdate(id, volunteerData, { new: true });
}

// Delete volunteer
const deleteVolunteer = async (id) => {
  return await Volunteer.findByIdAndDelete(id);
}

//export all functions
module.exports = {
  getAllVolunteers,
  getVolunteersByEvent,
  getVolunteersByUser,
  getVolunteerById,
  createVolunteer,
  updateVolunteer,
  deleteVolunteer,
  getRegisteredVolunteer
}