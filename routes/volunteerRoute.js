//import 
const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const volunteerController = require('../controllers/volunteerController');
const isLogin = require('../middleware/isLogin');
const isAddressExist = require('../middleware/isAddressExist');
const validateAddress = require('../middleware/validateAddress');

// Define the routes

// get volunteer page
router.get('/:eventid', isLogin, volunteerController.applyVolunteer);

//save volunteer
router.post('/', isAddressExist, validateAddress, volunteerController.saveVolunteer);

module.exports = router;