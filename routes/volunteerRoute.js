//import 
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const volunteerController = require('../controllers/volunteerController');
const isLogin = require('../middleware/isLogin');


// Define the routes

// get volunteer page
router.get('/:eventid', isLogin, volunteerController.applyVolunteer);

//save volunteer
router.post('/', [
  check('name', 'Name is required.').notEmpty(),
  check('email', 'Please enter a valid email').isEmail(),
  check('phone', 'Phone is required.').notEmpty(),
  check('street', 'Street is required.').notEmpty(),
  check('postal', 'Postal is required.').notEmpty(),
  check('city', 'City is required.').notEmpty(),
  check('province', 'Province is required.').notEmpty(),
], volunteerController.saveVolunteer);

module.exports = router;