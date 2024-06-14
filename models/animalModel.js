const mongoose = require('mongoose');
const Location = require('./locationModel');
const AnimalType = require('./animalTypeModel');

/**
 * @swagger
 * components:
 *   schemas:
 *     Animal:
 *       type: object
 *       properties:
 *         type:
 *           type: string
 *           description: Reference to animal type, points to the ObjectId in AnimalType collection
 *         name:
 *           type: string
 *           description: Animal name
 *         order:
 *           type: number
 *           description: Order of animal in the list
 *         habitat:
 *           type: string
 *           description: Animal habitat information
 *         diet:
 *           type: string
 *           description: Animal diet information
 *         reproduction:
 *           type: string
 *           description: Animal reproduction information
 *         image:
 *           type: string
 *           description: Image URL
 *         endangered:
 *           type: boolean
 *           description: Endangered status, default is false
 *         desc:
 *           type: string
 *           description: Animal description, should be a long text in HTML format
 *         special:
 *           type: string
 *           description: Special information about the animal, should be a long text in HTML format
 *         species:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Species name
 *               desc:
 *                 type: string
 *                 description: Species description
 *               image:
 *                 type: string
 *                 description: Species image URL
 *               endangered:
 *                 type: boolean
 *                 description: Species endangered status, default is false
 *               locations:
 *                 type: array
 *                 items:
 *                   type: string
 *                   description: Reference to location, points to the ObjectId in Location collection
 *         createAt:
 *           type: string
 *           format: date-time
 *           description: Create time, default is current time
 *         updateAt:
 *           type: string
 *           format: date-time
 *           description: Update time, default is current time
 *       required:
 *         - type
 *         - name
 *         - habitat
 *         - diet
 *         - reproduction
 *         - image
 *         - desc
 *         - locations
 *         - createAt
 *         - updateAt
 */

// Define species schema
const speciesSchema = {
  name: { type: String, required: true, unique: true },
  desc: { type: String, required: true },
  image: { type: String, required: true },
  endangered: { type: Boolean, default: false },
}

// Define animal schema
const animalSchema = new mongoose.Schema({

  type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'AnimalType',
    required: true
  },
  name: { type: String, required: true, unique: true },
  order: { type: Number, default: 1 },
  habitat: { type: String, required: true },
  diet: { type: String, required: true },
  reproduction: { type: String, required: true },
  image: { type: String, required: true },
  endangered: { type: Boolean, default: false },
  desc: { type: String, required: true },
  special: { type: String, default: '' },
  species: [speciesSchema],
  locations: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Location',
    required: true
  }],
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now }
});

// Pre-save update time
animalSchema.pre('save', function (next) {
  this.updateAt = new Date();
  next();
});

const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;