//import services
const blogService = require('../services/blogService');
const commentService = require('../services/commentService');

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
    return res.render('blog/blogError', {
      error: 'Error in getting blog list.'
    });
  }
}

// get blog detail
const getBlogById = async (req, res) => {
  const id = req.params.id;
  const comments = await commentService.getCommentsByBlog(id);

  try {
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
    return res.render('blog/blogError', {
      error: 'Error in getting blog detail.'
    });
  }
}

//handle the comment post request
const createComment = async (req, res) => {

  const { blogid, userid } = req.body;
  const content = req.body.content.trim();

  let errors = [];
  if (!content) {
    errors.push('Comment is required.');
  } else if (content.split(/\s+/).length > 500) {
    errors.push('Comment should within 500 words.');
  } else if (!userid) {
    errors.push('No User information, please try again.');
  } else if (!blogid) {
    errors.push('No Blog information, please try again.');
  }

  if (errors.length > 0) {
    const blog = await blogService.getBlogById(blogid);
    const comments = await commentService.getCommentsByBlog(blogid);

    return res.render('blog/blogDetail', {
      blog,
      comments,
      content,
      errors
    });
  }

  try {
    await commentService.createComment({ blogid, userid, content });
    res.redirect(`/blog/${blogid}`);

  } catch (error) {
    return res.render('blog/blogError', {
      error: 'Error in creating comment.'
    });
  }
}

//export all functions
module.exports = {
  getBlogList,
  getBlogById,
  createComment
}