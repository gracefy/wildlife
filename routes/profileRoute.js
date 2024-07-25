const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

//import profile controller
const profileController = require('../controllers/profileController');

// Route for profile page
router.get('/:userid', profileController.getProfile);


// Route for updating profile
router.post('/edit', [
  check('username').notEmpty().withMessage('Username is required'),
  check('username', 'Username only include characters and numbers.').matches(/^[a-zA-Z0-9\s]+$/),
  check('username', 'Username is at most 20 character.').isLength({ max: 20 }),
  check('email').isEmail().withMessage('Email is invalid')
], profileController.updateProfile);


// Route for updating password
router.post('/password', [
  check('oldPass').notEmpty().withMessage('Old password is required'),
  check('newPass').notEmpty().withMessage('New password is required'),
  check('newPass').isLength({ min: 6 }).withMessage('Password must be more than 6 characters.'),
  check('newPass').isLength({ max: 20 }).withMessage('Password must be less than 20 characters.'),
], profileController.updatePassword);

module.exports = router;