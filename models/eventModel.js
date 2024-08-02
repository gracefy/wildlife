const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({

  title: { type: String, required: true },
  city: { type: String, required: true },
  location: { type: String, required: true },
  order: { type: Number, default: 1 },
  detail: { type: String, required: true },
  image: { type: String, required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  organizer: { type: [String], required: true },
  participants: { type: Number, required: true },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now }
});

// Pre-save update time
eventSchema.pre('save', function (next) {
  this.updateAt = new Date();
  next();
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;

/**
 * @swagger
 * components:
 *   schemas:
 *     Event:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           description: Event title, max 100 characters
 *         city:
 *           type: string
 *           description: Event city, max 30 characters
 *         location:
 *           type: string
 *           description: Event address, max 100 characters
 *         order:
 *           type: number
 *           description: Order of event in the list, default is 1
 *         detail:
 *           type: string
 *           description: Event detail, max 255 characters
 *         image:
 *           type: string
 *           description: Image URL, max 100 characters
 *         startTime:
 *           type: string
 *           description: Event start time
 *         endTime:
 *           type: string
 *           description: Event end time
 *         organizer:
 *           type: array
 *           items:
 *             type: string
 *             description: Event organizer, at least 1 organizer
 *         participants:
 *           type: number
 *           description: Max Number of participants
 *         createAt:
 *           type: string
 *           description: Event create time
 *         updateAt:
 *           type: string
 *           description: Event update time
 *       required:
 *         - title
 *         - city
 *         - location
 *         - order
 *         - detail
 *         - image
 *         - startTime
 *         - endTime
 *         - organizer
 *         - participants
 */