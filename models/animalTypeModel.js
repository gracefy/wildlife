const mongoose = require('mongoose');



/**
 * @swagger
 * components:
 *   schemas:
 *     AnimalType:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Animal type name (mammal/bird/reptile)
 *         image:
 *           type: string
 *           description: Image URL
 *         order:
 *           type: number
 *           description: Order of animal type
 *         desc:
 *           type: string
 *           description: Description of animal type (shown on the home page)
 */


// Define animalType schema
const animalTypeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  order: { type: Number, required: true },
  desc: { type: String, required: true },
});

const AnimalType = mongoose.model('AnimalType', animalTypeSchema);

module.exports = AnimalType;