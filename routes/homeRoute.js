//import express
const express = require('express');
const router = express.Router();

//import home controller
const homeController = require('../controllers/homeController');

// Route for home page
router.get('/', homeController.getHome);

// Route for about page
router.get('/about', homeController.getAbout);

//export router
module.exports = router;