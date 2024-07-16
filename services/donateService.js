const Donate = require('../models/donateModel');

//import moment
const moment = require('moment');
const formatDateTime = (dateTime) => {
  return moment(dateTime).format('YYYY-MM-DD hh:mmA');
}

// Create donate
const saveDonate = async (donateData) => {
  return await Donate.create(donateData);
}

// Get all donates by user id
const getDonatesByUser = async (userId) => {
  const donates = await Donate.find({ userid: userId });
  return donates.map(donate => ({
    ...donate.toObject(),
    createAt: formatDateTime(donate.createAt),
  }));
}


module.exports = {
  saveDonate,
  getDonatesByUser
};


