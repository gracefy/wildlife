const mongoose = require('mongoose');

// Define address schema
const addressSchema = new mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  phone: { type: String, required: true },
  street: { type: String, required: true },
  city: { type: String, required: true },
  province: { type: String, required: true },
  postal: { type: String, required: true },
  isDeteled: { type: Boolean, default: false },
});

// Create a model
const Address = mongoose.model('Address', addressSchema);

module.exports = Address;