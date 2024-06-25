//import event model
const Event = require('../models/eventModel');

//import moment
const moment = require('moment');
const formatDateTime = (dateTime) => {
  return moment(dateTime).format('YYYY-MM-DD hh:mmA');
}

// Get all events
const getAllEvents = async () => {
  const events = await Event.find().sort({ startTime: -1 });
  return events.map(event => ({
    ...event.toObject(),
    startTime: formatDateTime(event.startTime),
    endTime: formatDateTime(event.endTime)
  }));
}

// Get event by id
const getEventById = async (id) => {
  const event = await Event.findById(id);
  return event ? {
    ...event.toObject(),
    startTime: formatDateTime(event.startTime),
    endTime: formatDateTime(event.endTime)
  } : null;
}

// Create event
const createEvent = async (eventData) => {
  return await Event.create(eventData);
}

// Update event
const updateEvent = async (id, eventData) => {
  return await Event.findByIdAndUpdate(id, eventData, { new: true });
}

// Delete event
const deleteEvent = async (id) => {
  return await Event.findByIdAndDelete(id);
}

// Get event count
const getEventCount = async () => {
  return await Event.countDocuments();
}

// Get pagination events
const getPaginationEvents = async (skipNumber, limitSize) => {
  const paginatedEvents = await Event.find().sort({ startTime: -1 }).skip(skipNumber).limit(limitSize);
  return paginatedEvents.map(event => ({
    ...event.toObject(),
    startTime: formatDateTime(event.startTime),
    endTime: formatDateTime(event.endTime)
  }));
}

module.exports = {
  getAllEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
  getEventCount,
  getPaginationEvents
}