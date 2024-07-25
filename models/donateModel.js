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
  status: {
    type: String,
    enum: ['pending', 'failed', 'completed'],
    default: 'pending'
  },
  createAt: {
    type: Date,
    default: Date.now
  }
});

const Donate = mongoose.model('Donate', donateSchema);

// Export the model
module.exports = Donate;

/**
 * @swagger
 * components:
 *   schemas:
 *     Donate:
 *       type: object
 *       required:
 *         - userid
 *         - amount
 *       properties:
 *         userid:
 *           type: string
 *           description: The ID of the user making the donation
 *           example: 60c72b2f9b1e8c1e9c8b4567
 *         amount:
 *           type: number
 *           description: The amount of the donation
 *           example: 50
 *         createAt:
 *           type: string
 *           format: date-time
 *           description: The date and time when the donation was created
 *           example: 2024-07-24T14:48:00.000Z
 *         status:
 *           type: string
 *           description: The status of the donation
 *           enum: [pending, failed, completed]
 *           default: pending
 *           example: pending
 */