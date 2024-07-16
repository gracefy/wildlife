//import express
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

//import blog controller
const blogController = require('../controllers/blogController');

// Route for blog list page
router.get('/', blogController.getBlogList);

// Route for blog detail page
router.get('/:id', blogController.getBlogById);

// Route for create comment
router.post('/:id/comment', [
  check('content', 'Comment is required.').notEmpty(),
  check('content', 'Comment should within 200 characters.').isLength({ max: 200 }),
], blogController.createComment);

module.exports = router;