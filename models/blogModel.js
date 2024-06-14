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