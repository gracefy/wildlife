const mongoose = require("mongoose");
const Location = require("./locationModel");
const AnimalType = require("./animalTypeModel");

// Define species schema
const speciesSchema = {
  name: { type: String, required: true },
  desc: { type: String, required: true },
  image: { type: String, required: true },
  endangered: { type: Boolean, default: false },
};

// Define animal schema
const animalSchema = new mongoose.Schema({
  type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AnimalType",
    required: true,
  },
  name: { type: String, required: true, unique: true },
  order: { type: Number, default: 1 },
  habitat: { type: String, required: true },
  diet: { type: String, required: true },
  reproduction: { type: String, required: true },
  image: { type: String, required: true },
  endangered: { type: Boolean, default: false },
  desc: { type: String, required: true },
  special: { type: String, default: "" },
  species: [speciesSchema],
  locations: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Location",
      required: true,
    },
  ],
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

// Pre-save update time
animalSchema.pre("save", function (next) {
  this.updateAt = new Date();
  next();
});

const Animal = mongoose.model("Animal", animalSchema);

module.exports = Animal;

/**
 * @swagger
 * components:
 *   schemas:
 *     Animal:
 *       type: object
 *       required:
 *         - type
 *         - name
 *         - habitat
 *         - diet
 *         - reproduction
 *         - image
 *         - desc
 *         - locations
 *       properties:
 *         type:
 *           type: string
 *           description: The type of the animal
 *         name:
 *           type: string
 *           description: The name of the animal
 *         order:
 *           type: number
 *           description: The order of the animal
 *           default: 1
 *         habitat:
 *           type: string
 *           description: The habitat of the animal
 *         diet:
 *           type: string
 *           description: The diet of the animal
 *         reproduction:
 *           type: string
 *           description: The reproduction of the animal
 *         image:
 *           type: string
 *           description: An image URL of the animal
 *         endangered:
 *           type: boolean
 *           description: Whether the animal is endangered
 *           default: false
 *         desc:
 *           type: string
 *           description: A description of the animal
 *         special:
 *           type: string
 *           description: Any special characteristics of the animal
 *           default: ''
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
 *         locations:
 *           type: array
 *           items:
 *             type: string
 *             description: The ID of the location
 *         createAt:
 *           type: string
 *           format: date-time
 *           description: The creation date
 *         updateAt:
 *           type: string
 *           format: date-time
 *           description: The last update date
 */
