const { validationResult } = require('express-validator');
const userService = require('../services/userService');

//handle user registration
const registerUser = async (req, res) => {
  // Validate the request
  const errors = validationResult(req);

  if (!errors.isEmpty()) {

    //set error messages for each field
    const errorMessages = {};
    errors.array().forEach(error => {
      errorMessages[error.path] = error.msg;
    });
    // console.log(errorMessages);
    res.render('user/register', { errors: errorMessages, username: req.body.username, email: req.body.email });
    return;
  }

  const { username, password, email } = req.body;

  try {
    // Create a new user
    const user = await userService.registerService({ username, password, email });
    req.session.userid = user._id;
    req.session.username = user.username;


    // Redirect to the original page
    const originalPage = req.session.originalPage || '/';
    delete req.session.originalPage;
    console.log('originalPage', originalPage);


    res.redirect(originalPage);
    return;

  } catch (error) {
    if (error.path === 'existerror') {
      return res.render('user/register', { dbErrors: { dberror: error.msg }, username: username, email: email });
    } else {
      console.log('error in saving new user', error.message);
      return res.render('user/register', { dbErrors: { dberror: 'Error in Register, please try again.' }, username: username, email: email });
    }
  }
}

//handle user login
const loginUser = async (req, res) => {

  // Validate the request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {

    //set error messages for each field
    const errorMessages = {};
    errors.array().forEach(error => {
      errorMessages[error.path] = error.msg;
    });
    // console.log(errorMessages);

    return res.render('user/login', { errors: errorMessages });
  }

  const { email, password } = req.body;

  try {
    const user = await userService.loginService({ email, password });

    req.session.userid = user._id;
    req.session.username = user.username;

    // Redirect to the original page
    const originalPage = req.session.originalPage || '/';
    delete req.session.originalPage;
    console.log('originalPage', originalPage);

    res.redirect(originalPage);
    return;

  } catch (error) {
    if (error.path === 'usererror' || error.path === 'passerror') {
      return res.render('user/login', { dbErrors: { dberror: error.msg } });
    } else {
      console.log('error in Login', error.message);
      return res.render('user/login', { dbErrors: { dberror: 'Error in Login, please try again.' }, email: email });
    }
  }
}

// handle get routes
const login = (req, res) => {
  res.render('user/login');
}

const register = (req, res) => {
  res.render('user/register');
}

const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log('Error in Logout', err.message);

      res.redirect('/');

    }
    res.redirect('/');
  });
}

// Export the functions
module.exports = {
  registerUser,
  loginUser,
  login,
  register,
  logout
};