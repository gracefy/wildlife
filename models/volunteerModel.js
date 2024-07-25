//import mongoose
const mongoose = require('mongoose');
const Event = require('./eventModel');
const User = require('./userModel');
const { max } = require('moment');



const volunteerSchema = new mongoose.Schema({
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  intro: { type: String, default: '', maxlength: 200 },
  isPass: { type: Boolean, default: false },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now }
});

// Pre-save update time
volunteerSchema.pre('save', function (next) {
  this.updateAt = new Date();
  next();
});

const Volunteer = mongoose.model('Volunteer', volunteerSchema);

module.exports = Volunteer;

/**
 * @swagger
 * components:
 *   schemas:
 *     Volunteer:
 *       type: object
 *       required:
 *         - event
 *         - user
 *       properties:
 *         event:
 *           type: string
 *           description: The ID of the event the volunteer is associated with
 *           example: 60c72b2f9b1e8c1e9c8b456a
 *         user:
 *           type: string
 *           description: The ID of the user who is volunteering
 *           example: 60c72b2f9b1e8c1e9c8b4568
 *         intro:
 *           type: string
 *           description: A brief introduction of the volunteer
 *           maxlength: 200
 *           example: I am excited to help with this event.
 *         isPass:
 *           type: boolean
 *           description: Indicates whether the volunteer has passed the selection process
 *           default: false
 *         createAt:
 *           type: string
 *           format: date-time
 *           description: The date and time when the volunteer record was created
 *           example: 2024-07-24T14:48:00.000Z
 *         updateAt:
 *           type: string
 *           format: date-time
 *           description: The date and time when the volunteer record was last updated
 *           example: 2024-07-24T15:00:00.000Z
 */