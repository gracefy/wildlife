//import services
const blogService = require('../services/blogService');
const commentService = require('../services/commentService');
const { validationResult } = require('express-validator');

// get blog list
const getBlogList = async (req, res) => {

  const title = req.query.search_query;

  //get the current page, by default it is 1
  let currentPage = req.query.page ? parseInt(req.query.page) : 1;
  const pageSize = 6;
  const skipNumber = (currentPage - 1) * pageSize;

  let totalBlogs;
  let paginatedBlogs;

  try {

    if (title) {

      totalBlogs = await blogService.getSearchBlogCount(title);//get the total number of blogs
      paginatedBlogs = await blogService.getPaginationBlogsByTitle(title);//get the paginated data
    } else {
      totalBlogs = await blogService.getBlogCount();//get the total number of blogs
      paginatedBlogs = await blogService.getPaginationBlogs(skipNumber, pageSize);//get the paginated data
    }

    const totalPages = Math.ceil(totalBlogs / pageSize);

    if (!paginatedBlogs) {
      return res.status(404).send('Blogs not found');
    }

    // pass the data to the view
    res.render('blog/blog', {
      paginatedBlogs,
      currentPage,
      totalPages
    });

  } catch (error) {
    console.log('Error getting blogs:', error.message);

    return res.render('home/error', {
      error: 'Sorry, Error in getting blog list.'
    });
  }
}

// get blog detail
const getBlogById = async (req, res) => {
  const id = req.params.id;
  try {
    const comments = await commentService.getCommentsByBlog(id);
    const blog = await blogService.getBlogById(id);

    if (!blog) {
      return res.status(404).send('Blog not found');
    }

    // pass the data to the view
    res.render('blog/blogDetail', {
      blog,
      comments
    });

  } catch (error) {
    console.log('Error getting blog:', error.message);

    return res.render('home/error', {
      message: 'Sorry, Error in getting blog detail.'
    });
  }
}

//handle the comment post request
const createComment = async (req, res) => {

  const { blogid, userid, content } = req.body;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {

    const errorArray = errors.array();

    const blog = await blogService.getBlogById(blogid);
    const comments = await commentService.getCommentsByBlog(blogid);

    return res.render('blog/blogDetail', {
      blog,
      comments,
      content,
      errors: errorArray
    });
  }

  try {
    await commentService.createComment({ blogid, userid, content });
    res.redirect(`/blog/${blogid}`);

  } catch (error) {

    console.log('Error in creating comment:', error.message);
    return res.render('home/error', {
      message: 'Sorry, Error in creating comment.'
    });
  }
}

//export all functions
module.exports = {
  getBlogList,
  getBlogById,
  createComment
}