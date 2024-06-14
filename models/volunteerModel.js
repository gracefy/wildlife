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