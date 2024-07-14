const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
//import donate controller
const donateController = require('../controllers/donateController');

const isAddressExist = require('../middleware/isAddressExist');

const validateAddress = require('../middleware/validateAddress');

//validata amount & customAmount
function validateAmount(value, { req }) {
  const customAmount = req.body.customAmount;

  if (!value && !customAmount) {
    throw new Error('Either amount or customAmount is required.');

  } else if (!value && customAmount == '') {
    throw new Error('Either amount or customAmount is required.');

  } else if (!value && isNaN(customAmount)) {
    throw new Error('Either amount or customAmount is required.');

  } else if (customAmount && customAmount < 1) {
    throw new Error('Custom amount must be at least 1.');

  } else if (customAmount && customAmount > 1000) {
    throw new Error('Custom amount must be less than 1000.');

  }


  return true;
};

//get donate page
router.get('/', donateController.getDonate);

//process donate
router.post('/process', isAddressExist, validateAddress, [
  check('amount').custom(validateAmount),
],
  donateController.processDonate);

//get success page
router.get('/success', donateController.getSuccess);

//handle stripe webhook
router.post('/webhook', express.raw({ type: 'application/json' }), donateController.handleWebhook);


module.exports = router;