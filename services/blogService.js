const Blog = require('../models/blogModel');

//import moment
const moment = require('moment');
const formatDateTime = (dateTime) => {
  return moment(dateTime).format('MMMM D, YYYY');
}

// Get all blogs
const getAllBlogs = async () => {
  const blogs = await Blog.find().sort({ createAt: -1 });
  return blogs.map(blog => ({
    ...blog.toObject(),
    createAt: formatDateTime(blog.createAt),
  }));
}

// Get blog by id
const getBlogById = async (id) => {
  const blog = await Blog.findById(id);
  return {
    ...blog.toObject(),
    createAt: formatDateTime(blog.createAt),
  };
}

//get blog by title
const getBlogByTitle = async (title) => {
  return await Blog.find({ title: { $regex: title, $options: 'i' } });
}

// Create blog
const createBlog = async (blogData) => {
  return await Blog.create(blogData);
}

// Update blog
const updateBlog = async (id, blogData) => {
  return await Blog.findByIdAndUpdate(id, blogData, { new: true });
}

// Delete blog
const deleteBlog = async (id) => {
  return await Blog.findByIdAndDelete(id);
}

// Get blog count
const getBlogCount = async () => {
  return await Blog.countDocuments();
}

// Get blog count by title
const getSearchBlogCount = async (title) => {
  return await Blog.countDocuments({ title: { $regex: title, $options: 'i' } });
}

// Get pagination blogs
const getPaginationBlogs = async (skipNumber, limitSize) => {
  const paginatedBlogs = await Blog.find().sort({ createAt: -1 }).skip(skipNumber).limit(limitSize);

  return paginatedBlogs.map(blog => ({
    ...blog.toObject(),
    createAt: formatDateTime(blog.createAt),
  }));
}

// Get pagination blogs by title
const getPaginationBlogsByTitle = async (title, skipNumber, limitSize) => {
  const paginatedBlogs = await Blog.find({ title: { $regex: title, $options: 'i' } })
    .sort({ createAt: -1 })
    .skip(skipNumber)
    .limit(limitSize);

  return paginatedBlogs.map(blog => ({
    ...blog.toObject(),
    createAt: formatDateTime(blog.createAt),
  }));
}

module.exports = {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
  getBlogCount,
  getPaginationBlogs,
  getBlogByTitle,
  getSearchBlogCount,
  getPaginationBlogsByTitle,
};
