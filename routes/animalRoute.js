//import express
const express = require('express');
const router = express.Router();

//import animal controller
const animalController = require('../controllers/animalController');

// Route for animal list
router.get('/', animalController.getAnimalList);

// Route for animal detail
router.get('/:id', animalController.getAnimalById);

//export router
module.exports = router;