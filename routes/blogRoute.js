//import express
const express = require('express');
const router = express.Router();

//import blog controller
const blogController = require('../controllers/blogController');

// Route for blog list page
router.get('/', blogController.getBlogList);

// Route for blog detail page
router.get('/:id', blogController.getBlogById);

module.exports = router;