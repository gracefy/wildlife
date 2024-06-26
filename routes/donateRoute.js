const express = require('express');
const router = express.Router();

//import donate controller
const donateController = require('../controllers/donateController');

//get donate page
router.get('/', donateController.getDonate);

//process donate
router.post('/process', donateController.processDonate);

//get success page
router.get('/success', donateController.getSuccess);

//handle stripe webhook
router.post('/webhook', express.raw({ type: 'application/json' }), donateController.handleWebhook);


module.exports = router;