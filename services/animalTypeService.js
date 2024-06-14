//import animal type model
const AnimalType = require('../models/animalTypeModel');

// Get all animal types
const getAllAnimalTypes = async () => {
  return await AnimalType.find().sort({ order: 1 });//sort by order in ascending order
}

//export functions
module.exports = {
  getAllAnimalTypes
};