const Address = require('../models/addressModel');
const User = require('../models/userModel');

// Get all addresses by user id
const getAddressesByUserId = async (userId) => {
  const user = await User.findById(userId).populate('address');
  return user.address;
}

// create address
const createAddress = async (addressData) => {
  const address = await Address.create(addressData);
  return address;
}

// update address
const updateAddress = async (addressId, addressData) => {
  const address = await Address.findByIdAndUpdate(addressId, addressData, { new: true });
  return address;
}

// delete address
const deleteAddress = async (addressId) => {
  const address = await Address.findByIdAndUpdate(addressId, { isDeleted: true }, { new: true });
  return address;
}

//export functions
module.exports = {
  getAddressesByUserId,
  createAddress,
  updateAddress,
  deleteAddress
}