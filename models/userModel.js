const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
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