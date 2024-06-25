//import express
const express = require('express');
const router = express.Router();

//import event controller
const eventController = require('../controllers/eventController');

// Route for event list page
router.get('/', eventController.getEventList);

module.exports = router;