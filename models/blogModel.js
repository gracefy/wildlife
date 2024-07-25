//import mongoose
const mongoose = require('mongoose');

//create a schema
const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  image: { type: String, required: true },
  content: { type: String, required: true },
  excerpt: { type: String },
  tags: { type: [], default: [] },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now }
});

// Pre-save update time
blogSchema.pre('save', function (next) {
  this.updateAt = new Date();
  next();
});

//create a model
const Blog = mongoose.model('Blog', blogSchema);

//export the model
module.exports = Blog;


/**
 * Blog Schema
 * @swagger
 * components:
 *   schemas:
 *     Blog:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: Blog id
 *         title:
 *           type: string
 *           description: Blog title
 *         content:
 *           type: string
 *           description: Blog content，should be html format
 *         image:
 *           type: string
 *           description: Image URL
 *         date:
 *           type: string
 *           description: Blog date
 *         tags:
 *           type: array
 *           items:
 *             type: string
 *             description: Blog tags，default is empty
 *         author:
 *           type: string
 *           description: Blog author
 *       required:
 *         - id
 *         - title
 *         - content
 *         - image
 *         - date
 *         - author
 */
