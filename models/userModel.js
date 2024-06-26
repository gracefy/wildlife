/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           description: User name
 *         password:
 *           type: string
 *           description: User password, at least 6 characters
 *         email:
 *           type: string
 *           description: User email, must be unique
 *         createAt:
 *           type: string
 *           description: User create time
 *         updateAt:
 *           type: string
 *           description: User update time
 *       required:
 *         - username
 *         - password
 *         - email
 */


const mongoose = require('mongoose');
const Address = require('./addressModel');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  address: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Address',
    default: ''
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