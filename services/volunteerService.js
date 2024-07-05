const Volunteer = require('../models/volunteerModel');
const Event = require('../models/eventModel');

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
  return await Volunteer.find({ user: userid })
    .sort({ createAt: -1 }) //sort by createAt in descending order
    .populate('event') //populate the eventid field
    .populate('user'); //populate the userid field
}

// Get volunteer by id
const getVolunteerById = async (id) => {
  return await Volunteer.findById(id)
    .populate('event')
    .populate('user');
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