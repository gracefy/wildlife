//import dependencies
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const userController = require('../controllers/userController');

// Define the routes
//register a new user
router.post('/register', [
  check('username', 'Username is required.').notEmpty(),
  check('username', 'Username only include characters and numbers.').matches(/^[a-zA-Z0-9]+$/),
  check('username', 'Username is at most 20 character.').isLength({ max: 20 }),
  check('email', 'Please enter a valid email').isEmail(),
  check('password', 'Password is at least 6 character.').isLength({ min: 6 }),
  check('password', 'Password is at most 20 character.').isLength({ max: 20 }),
], userController.registerUser);

//login a user
router.post('/login', [
  check('email', 'Please enter a valid email').isEmail(),
  check('password', 'Password is required.').notEmpty(),
], userController.loginUser);

//open address page
router.get('/address', userController.getAddress);

//save address
router.post('/address', [
  check('fname', 'First Name is required.').notEmpty(),
  check('fname', 'First Name is at most 20 character and only include characters.').isLength({ max: 20 }).matches(/^[a-zA-Z]+$/),
  check('lname', 'Last Name  is at most 20 character and only include characters.').isLength({ max: 20 }).matches(/^[a-zA-Z]+$/),
  check('phone', 'Phone is required.').notEmpty(),
  check('phone', 'Phone number should be in format: 112-223-4455 or 1122234455').matches(/^(\d{3}-\d{3}-\d{4}|\d{10})$/),
  check('street', 'Street is required.').notEmpty(),
  check('street', 'Street is at most 50 character.').isLength({ max: 50 }),
  check('postal', 'Postal is required.').notEmpty(),
  check('postal', 'Postal format should be in format: 1A2B3C or 1A2 B3C.').matches(/^[A-Za-z][0-9][A-Za-z] ?[0-9][A-Za-z][0-9]$/),
  check('city', 'City is required.').notEmpty(),
  check('city', 'City is at most 20 character.').isLength({ max: 20 }),
  check('province', 'Province is required.').notEmpty(),
], userController.updateAddress);



//login page
router.get('/login', userController.login);

//register page
router.get('/register', userController.register);

//logout
router.get('/logout', userController.logout);

// Export the router
module.exports = router;