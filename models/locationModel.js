//import mongoose
const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  province: { type: String, default: 'ON' },
  address: { type: String, default: '' },
  postalCode: { type: String, default: '' },
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
  image: { type: String, required: true },
  desc: { type: String, required: true },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now }
});

// Pre-save update time
locationSchema.pre('save', function (next) {
  this.updateAt = new Date();
  next();
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;

/**
 * @swagger
 * components:
 *   schemas:
 *     Location:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Wildlife center/park name
 *         city:
 *           type: string
 *           description: Wildlife center/park city
 *         province:
 *           type: string
 *           description: Wildlife center/park province, default is ON
 *         address:
 *           type: string
 *           description: Wildlife center/park address, default is empty
 *         postalCode:
 *           type: string
 *           description: Wildlife center/park postal code, default is empty
 *         lat:
 *           type: number
 *           description: Wildlife center/park latitude, e.g., 43.6532
 *         lng:
 *           type: number
 *           description: Wildlife center/park longitude, e.g., -79.3831
 *         image:
 *           type: string
 *           description: Image URL
 *         desc:
 *           type: string
 *           description: Location description
 *         createAt:
 *           type: string
 *           description: Location create time
 *         updateAt:
 *           type: string
 *           description: Location update time
 *       required:
 *         - name
 *         - city
 *         - lat
 *         - lng
 *         - image
 *         - desc
 */
