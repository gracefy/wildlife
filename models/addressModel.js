const mongoose = require('mongoose');

// Define address schema
const addressSchema = new mongoose.Schema({
  fname: { type: String, required: true, maxlength: 20 },
  lname: { type: String, required: true, maxlength: 20 },
  phone: { type: String, required: true, maxlength: 20 },
  street: { type: String, required: true, maxlength: 100 },
  city: { type: String, required: true, maxlength: 30 },
  province: { type: String, required: true, maxlength: 20 },
  postal: { type: String, required: true, maxlength: 10 },
  isDeteled: { type: Boolean, default: false },
});

// Create a model
const Address = mongoose.model('Address', addressSchema);

module.exports = Address;


/**
 * @swagger
 * components:
 *   schemas:
 *     Address:
 *       type: object
 *       required:
 *         - fname
 *         - lname
 *         - phone
 *         - street
 *         - city
 *         - province
 *         - postal
 *       properties:
 *         fname:
 *           type: string
 *           description: The first name of the address holder
 *           maxlength: 20
 *           example: John
 *         lname:
 *           type: string
 *           description: The last name of the address holder
 *           maxlength: 20
 *           example: Doe
 *         phone:
 *           type: string
 *           description: The phone number of the address holder
 *           maxlength: 20
 *           example: +1234567890
 *         street:
 *           type: string
 *           description: The street address
 *           maxlength: 100
 *           example: 123 Main St
 *         city:
 *           type: string
 *           description: The city of the address
 *           maxlength: 30
 *           example: Springfield
 *         province:
 *           type: string
 *           description: The province or state of the address
 *           maxlength: 20
 *           example: Illinois
 *         postal:
 *           type: string
 *           description: The postal or ZIP code
 *           maxlength: 10
 *           example: 62701
 *         isDeleted:
 *           type: boolean
 *           description: Indicates if the address is deleted
 *           default: false
 *           example: false
 */