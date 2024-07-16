const Comment = require('../models/commentModel');
const User = require('../models/userModel');
const Blog = require('../models/blogModel');

//import moment
const moment = require('moment');
const formatDateTime = (dateTime) => {
  return moment(dateTime).format('YYYY-MM-DD hh:mmA');
}


// Get all comments by blogid
const getCommentsByBlog = async (blogid) => {
  const comments = await Comment.find({ blogid: blogid, isDeleted: false })
    .sort({ createAt: -1 }) //sort by createAt in descending order
    .populate('userid'); //populate the userid field

  return comments.map(comment => ({
    ...comment.toObject(),
    createAt: formatDateTime(comment.createAt)
  }));
}

// Get all comments by userid
const getCommentsByUser = async (userid) => {
  const comments = await Comment.find({ userid: userid, isDeleted: false })
    .sort({ createAt: -1 }) //sort by createAt in descending order
    .populate('blogid') //populate the blogid field
    .populate('userid'); //populate the userid field

  return comments.map(comment => ({
    ...comment.toObject(),
    createAt: formatDateTime(comment.createAt)
  }));
}

// Create comment
const createComment = async (commentData) => {
  return await Comment.create(commentData);
}

// Delete comment
const deleteComment = async (id) => {
  return await Comment.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
}

//export all functions
module.exports = {
  getCommentsByBlog,
  getCommentsByUser,
  createComment,
  deleteComment
};