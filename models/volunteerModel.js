/**
 * @swagger
 * components:
 *   schemas:
 *     Volunteer:
 *       type: object
 *       properties:
 *         eventid:
 *           type: string
 *           description: Reference to Event collection, points to Event id
 *         userid:
 *           type: string
 *           description: Reference to User collection, points to User id
 *         name:
 *           type: string
 *           description: Volunteer name
 *         email:
 *           type: string
 *           description: Volunteer email
 *         phone:
 *           type: string
 *           description: Volunteer phone number
 *         street:
 *           type: string
 *           description: Volunteer street address
 *         postal:
 *           type: string
 *           description: Volunteer postal code
 *         city:
 *           type: string
 *           description: Volunteer city
 *         province:
 *           type: string
 *           description: Volunteer province, default is ON
 *         intro:
 *           type: string
 *           description: Volunteer introduction, default is empty
 *         isPass:
 *           type: boolean
 *           description: Volunteer application status, default is false
 *         createAt:
 *           type: string
 *           description: Volunteer application create time
 *         updateAt:
 *           type: string
 *           description: Volunteer application update time
 *       required:
 *         - eventid
 *         - userid
 *         - name
 *         - email
 *         - phone
 *         - street
 *         - postal
 *         - city
 *         - province
 */

//import mongoose
const mongoose = require('mongoose');
const Event = require('./eventModel');
const User = require('./userModel');

const volunteerSchema = new mongoose.Schema({
  eventid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
    required: true
  },
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  street: { type: String, required: true },
  postal: { type: String, required: true },
  city: { type: String, required: true },
  province: { type: String, required: true },
  intro: { type: String, default: '' },
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