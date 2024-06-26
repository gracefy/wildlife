const mongoose = require('mongoose');
const User = require('./userModel');

const donateSchema = new mongoose.Schema({
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  createAt: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    default: 'pending'
  }
});

const Donate = mongoose.model('Donate', donateSchema);

// Export the model
module.exports = Donate;