
const mongoose = require('mongoose');
const Address = require('./addressModel');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, maxlength: 20 },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true, maxlength: 100 },
  address: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Address',
    required: false
  },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now }
});

// Pre-save update time
userSchema.pre('save', function (next) {
  this.updateAt = new Date();
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - username
 *         - password
 *         - email
 *       properties:
 *         username:
 *           type: string
 *           description: The username of the user
 *           maxlength: 20
 *           example: johndoe
 *         password:
 *           type: string
 *           description: The password of the user
 *           example: secretpassword
 *         email:
 *           type: string
 *           description: The email address of the user
 *           format: email
 *           unique: true
 *           maxlength: 100
 *           example: johndoe@example.com
 *         address:
 *           type: string
 *           description: The ID of the address associated with the user
 *           example: 60c72b2f9b1e8c1e9c8b4567
 *         createAt:
 *           type: string
 *           format: date-time
 *           description: The date and time when the user was created
 *           example: 2024-07-24T14:48:00.000Z
 *         updateAt:
 *           type: string
 *           format: date-time
 *           description: The date and time when the user was last updated
 *           example: 2024-07-24T15:00:00.000Z
 */