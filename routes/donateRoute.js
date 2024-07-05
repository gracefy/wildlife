const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
//import donate controller
const donateController = require('../controllers/donateController');

const isAddressExist = require('../middleware/isAddressExist');

const validateAddress = require('../middleware/validateAddress');


//get donate page
router.get('/', donateController.getDonate);

//process donate
router.post('/process', isAddressExist, validateAddress, [
  check('amount', 'Amount is required.').notEmpty()
], donateController.processDonate);

//get success page
router.get('/success', donateController.getSuccess);

//handle stripe webhook
router.post('/webhook', express.raw({ type: 'application/json' }), donateController.handleWebhook);


module.exports = router;