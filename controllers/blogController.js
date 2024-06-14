//import services
const blogService = require('../services/blogService');

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
    res.status(500).json({ message: error.message });
  }
}

// get blog detail
const getBlogById = async (req, res) => {
  const id = req.params.id;
  const comments = [];

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
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  getBlogList,
  getBlogById
}