const userSerivice = require('../services/userService');
const commentService = require('../services/commentService');
const donateService = require('../services/donateService');
const volunteerService = require('../services/volunteerService');
const province = require('../configs/provinces');
const bcrypt = require('bcryptjs');

const { validationResult } = require('express-validator');


//get user profile
const getProfile = async (req, res) => {
  const userid = req.params.userid;

  if (!userid) {
    return res.redirect('/user/login');
  }

  const user = await userSerivice.getUserById(userid);
  const comments = await commentService.getCommentsByUser(userid) || [];
  const donations = await donateService.getDonatesByUser(userid) || [];
  const volunteers = await volunteerService.getVolunteersByUser(userid) || [];

  res.render('profile/profile', {
    user,
    comments,
    donations,
    volunteers
  });
}


//post user profile
const updateProfile = async (req, res) => {
  const { userid, username, email } = req.body;

  const user = await userSerivice.getUserById(userid);
  const comments = await commentService.getCommentsByUser(userid) || [];
  const donations = await donateService.getDonatesByUser(userid) || [];
  const volunteers = await volunteerService.getVolunteersByUser(userid) || [];

  const errors = validationResult(req);
  if (!errors.isEmpty()) {

    const errorMessages = {};

    errors.array().forEach(error => {
      errorMessages[error.path] = error.msg;
    });

    return res.render('profile/profile', {
      user,
      comments,
      donations,
      volunteers,
      errors: errorMessages
    });

  } else {
    const newUser = await userSerivice.updateUser(userid, { username, email });

    return res.render('profile/profile', {
      user: newUser,
      comments,
      donations,
      volunteers,
      success: 'Profile updated successfully.'
    });
  }
}


//post user password
const updatePassword = async (req, res) => {
  const { userid, oldPass, newPass } = req.body;

  const user = await userSerivice.getUserById(userid);
  const comments = await commentService.getCommentsByUser(userid) || [];
  const donations = await donateService.getDonatesByUser(userid) || [];
  const volunteers = await volunteerService.getVolunteersByUser(userid) || [];

  const errors = validationResult(req);
  if (!errors.isEmpty()) {

    const errorMessages = {};

    errors.array().forEach(error => {
      errorMessages[error.path] = error.msg;
    });

    return res.render('profile/profile', {
      user,
      comments,
      donations,
      volunteers,
      errors: errorMessages
    });

  } else {

    const isPasswordMatch = await bcrypt.compare(oldPass, user.password);

    if (!isPasswordMatch) {
      return res.render('profile/profile', {
        user,
        comments,
        donations,
        volunteers,
        errors: { oldPass: 'Old password is incorrect.' }
      });
    }

    const password = newPass;
    const newUser = await userSerivice.updateUserPassword(userid, password);

    return res.render('profile/profile', {
      user: newUser,
      comments,
      donations,
      volunteers,
      success: 'Password updated successfully.'
    });
  }
}



//export controller
module.exports = {
  getProfile,
  updateProfile,
  updatePassword
};