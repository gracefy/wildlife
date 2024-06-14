//import dependencies
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const userController = require('../controllers/userController');

// Define the routes
//register a new user
router.post('/register', [
  check('username', 'Username is required.').notEmpty(),
  check('email', 'Please enter a valid email').isEmail(),
  check('password', 'Password is at least 6 character.').isLength({ min: 6 }),
], userController.registerUser);

//login a user
router.post('/login', [
  check('email', 'Please enter a valid email').isEmail(),
  check('password', 'Password is required.').notEmpty(),
], userController.loginUser);


//login page
router.get('/login', userController.login);

//register page
router.get('/register', userController.register);

//logout
router.get('/logout', userController.logout);

// Export the router
module.exports = router;