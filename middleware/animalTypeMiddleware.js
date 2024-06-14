const animalTypeService = require('../services/animalTypeService');

const animalTypeMiddleware = async (req, res, next) => {

  try {
    const animalTypes = await animalTypeService.getAllAnimalTypes();
    res.locals.animalTypes = animalTypes;
    next();
  } catch (error) {
    console.log('error in animalTypeMiddleware', error.message);
    res.locals.animalTypes = [];
  }
}

module.exports = animalTypeMiddleware;