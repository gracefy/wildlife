// import the model
const Animal = require('../models/animalModel');

// Get animals for each page
const getAllAnimals = async () => {
  return await Animal.find()
    .sort({ order: 1 })  //sort by order in ascending order
    .populate('type')  //populate the type field
    .populate('locations'); //populate the locations field
}

// get animalList by type
const getAnimalsByType = async (typeID) => {
  return await Animal.find({ type: typeID })
    .sort({ order: 1 })  //sort by order in ascending order
    .populate('type')  //populate the type field
    .populate('locations'); //populate the locations field
}

//get animals by name
const getAnimalsByName = async (name) => {
  return await Animal.find({ name: { $regex: name, $options: 'i' } })
    .sort({ order: 1 })  //sort by order in ascending order
    .populate('type')  //populate the type field
    .populate('locations'); //populate the locations field
}

// >>>>>>>>>>>>>>>>>CRUD OPERATIONS<<<<<<<<<<<<<<<<<<
// get animal by id
const getAnimalById = async (id) => {
  return await Animal.findById(id)
    .populate('type')
    .populate('locations');
}

// create animal
const createAnimal = async (animalData) => {
  return await Animal.create(animalData);
}

// update animal
const updateAnimal = async (id, animalData) => {
  return await Animal.findByIdAndUpdate(id, animalData, { new: true });
}

//delete animal
const deleteAnimal = async (id) => {
  return await Animal.findByIdAndDelete(id);
}

// >>>>>>>>>>>>>>>>>PAGINATION AND COUNT<<<<<<<<<<<<<<<<<<
// get animal count
const getAnimalCount = async () => {
  return await Animal.countDocuments();
}

// get animal count by type
const getAnimalCountByType = async (typeID) => {
  return await Animal.countDocuments({ type: typeID });
}

//get endengered animal count
const getEndangeredAnimalCount = async () => {
  return await Animal.countDocuments({ endangered: true });
}

//get search animal count
const getSearchAnimalCount = async (name) => {
  return await Animal.countDocuments({ name: { $regex: name, $options: 'i' } });
}


//get pagination animals
const getPaginationAnimals = async (skipNumber, limitSize) => {
  const paginatedAnimals = await Animal.find()
    .sort({ order: -1 })
    .skip(skipNumber)
    .limit(limitSize)
    .populate('type')
    .populate('locations');

  return paginatedAnimals;
}

//get pagination animals by type
const getPaginationAnimalsByType = async (typeID, skipNumber, limitSize) => {

  const paginatedAnimals = await Animal.find({ type: typeID })
    .sort({ order: -1 })
    .skip(skipNumber)
    .limit(limitSize)
    .populate('type')
    .populate('locations');

  return paginatedAnimals;
}

//get endengered animal
const getEndangeredAnimals = async (skipNumber, limitSize) => {
  return await Animal.find({ endangered: true })
    .sort({ order: -1 })
    .skip(skipNumber)
    .limit(limitSize)
    .populate('type')
    .populate('locations');
}

//get search animals
const getSearchAnimals = async (name, skipNumber, limitSize) => {
  return await Animal.find({ name: { $regex: name, $options: 'i' } })
    .sort({ order: -1 })
    .skip(skipNumber)
    .limit(limitSize)
    .populate('type')
    .populate('locations');
}

//export functions
module.exports = {
  getAllAnimals,
  getAnimalsByType,
  getAnimalById,
  getPaginationAnimals,
  getPaginationAnimalsByType,
  getSearchAnimals,
  getEndangeredAnimals,
  createAnimal,
  updateAnimal,
  deleteAnimal,
  getAnimalCount,
  getAnimalCountByType,
  getEndangeredAnimalCount,
  getSearchAnimalCount,
};