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
    required: true,
    maxlength: 200
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

/**
 * @swagger
 * components:
 *   schemas:
 *     Comment:
 *       type: object
 *       required:
 *         - blogid
 *         - userid
 *         - content
 *       properties:
 *         blogid:
 *           type: string
 *           description: The ID of the blog post the comment is associated with
 *           example: 60c72b2f9b1e8c1e9c8b4567
 *         userid:
 *           type: string
 *           description: The ID of the user who made the comment
 *           example: 60c72b2f9b1e8c1e9c8b4568
 *         content:
 *           type: string
 *           description: The content of the comment
 *           maxlength: 200
 *           example: This is a sample comment.
 *         createAt:
 *           type: string
 *           format: date-time
 *           description: The date and time when the comment was created
 *           example: 2024-07-24T14:48:00.000Z
 *         isDeleted:
 *           type: boolean
 *           description: Indicates whether the comment is deleted
 *           default: false
 *           example: false
 */