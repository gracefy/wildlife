const brcypt = require('bcryptjs');
const User = require('../models/userModel');

// Create a new user
const createUser = async (user) => {
  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email: user.email });
    if (existingUser) {

      const error = { msg: 'User already exists. Please login.', path: 'existerror' }

      throw error;
    }

    // Hash the password
    const hashedPassword = await brcypt.hash(user.password, 10);

    // Create a new user
    const newUser = new User({
      username: user.username,
      password: hashedPassword,
      email: user.email
    });

    // Save the user
    await newUser.save();

    return newUser;
  } catch (error) {
    throw error;
  }
}

// Login a user
const authUser = async (user) => {
  try {
    // Check if the user exists
    const existingUser = await User.findOne({ email: user.email });
    if (!existingUser) {

      const userError = { msg: 'User does not exist. Please register.', path: 'usererror' }
      throw userError;
    }

    // Check if the password is correct
    const isPasswordMatch = await brcypt.compare(user.password, existingUser.password);
    if (!isPasswordMatch) {

      const passError = { msg: 'Password is invalid. Please try again.', path: 'passerror' }

      throw passError;
    }

    return existingUser;

  } catch (error) {
    throw error;
  }
}

//get user by id
const getUserById = async (userId) => {
  try {
    const user = await User.findById(userId).populate('address');
    return user;
  }
  catch (error) {
    throw error;
  }
}

//update user info with address id
const updateUserAddress = async (userId, addressId) => {
  try {
    const user = await User.findByIdAndUpdate(userId, { address: addressId }, { new: true });
    return user;
  } catch (error) {
    throw error;
  }
}


// Export the functions
module.exports = {
  createUser,
  authUser,
  getUserById,
  updateUserAddress
};