//import express
const express = require('express');
const router = express.Router();
const isLogin = require('../middleware/isLogin');

//import event controller
const eventController = require('../controllers/eventController');

// Route for event list page
router.get('/', eventController.getEventList);

// Route for volunteer page
router.get('/:id', isLogin, eventController.getEventById);

module.exports = router;