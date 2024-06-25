//import mongoose
const mongoose = require('mongoose');
const Blog = require('./blogModel');
const User = require('./userModel');

const commentSchema = new mongoose.Schema({
  blogid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Blog',
    required: true
  },
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  content: {
    type: String,
    required: true
  },
  createAt: {
    type: Date,
    default: Date.now
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;