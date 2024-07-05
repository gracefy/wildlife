const { check } = require('express-validator');
const isAddressExist = require('../middleware/isAddressExist');

const validateAddress = async (req, res, next) => {
  if (!req.userHasAddress) {
    await Promise.all([
      check('fname', 'First Name is required.').notEmpty().run(req),
      check('lname', 'Last Name is required.').notEmpty().run(req),
      check('phone', 'Phone is required.').notEmpty().run(req),
      check('street', 'Street is required.').notEmpty().run(req),
      check('postal', 'Postal is required.').notEmpty().run(req),
      check('city', 'City is required.').notEmpty().run(req),
      check('province', 'Province is required.').notEmpty().run(req)
    ]);
  }
  next();
}

//export validateAddress
module.exports = validateAddress;