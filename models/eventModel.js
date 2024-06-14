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