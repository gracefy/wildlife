const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  province: { type: String, default: 'ON' },
  address: { type: String, default: '' },
  postalCode: { type: String, default: '' },
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
  image: { type: String, required: true },
  desc: { type: String, required: true },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now }
});

// Pre-save update time
locationSchema.pre('save', function (next) {
  this.updateAt = new Date();
  next();
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;