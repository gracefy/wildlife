const Volunteer = require('../models/volunteerModel');

// Get all volunteers
const getAllVolunteers = async () => {
  return await Volunteer.find()
    .sort({ createAt: -1 }) //sort by createAt in descending order
    .populate('eventid') //populate the eventid field
    .populate('userid'); //populate the userid field
}

// Get volunteers by eventid
const getVolunteersByEvent = async (eventid) => {
  return await Volunteer.find({ eventid: eventid })
    .sort({ createAt: -1 }) //sort by createAt in descending order
    .populate('eventid') //populate the eventid field
    .populate('userid'); //populate the userid field
}

// Get volunteers by userid
const getVolunteersByUser = async (userid) => {
  return await Volunteer.find({ userid: userid })
    .sort({ createAt: -1 }) //sort by createAt in descending order
    .populate('eventid') //populate the eventid field
    .populate('userid'); //populate the userid field
}

// Get volunteer by id
const getVolunteerById = async (id) => {
  return await Volunteer.findById(id)
    .populate('eventid')
    .populate('userid');
}

// Create volunteer
const createVolunteer = async (volunteerData) => {
  return await Volunteer.create(volunteerData);
}

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
  deleteVolunteer
}