// import the functions from service
const animalService = require('../services/animalService');
const { appConfig } = require('../configs/appConfig');


// get animal list
const getAnimalList = async (req, res) => {
  let type = req.query.type;
  let name = req.query.search_query;

  //get the current page, by default it is 1
  let currentPage = req.query.page ? parseInt(req.query.page) : 1;
  const pageSize = 12;
  const skipNumber = (currentPage - 1) * pageSize;

  try {
    let paginatedAnimals;
    let totalAnimals;

    if (name) {
      totalAnimals = await animalService.getSearchAnimalCount(name);//get the total number of animals
      paginatedAnimals = await animalService.getSearchAnimals(name, skipNumber, pageSize);//get the paginated data
      type = 'all ';

    } else if (!type || type === 'all') {

      totalAnimals = await animalService.getAnimalCount();//get the total number of animals
      paginatedAnimals = await animalService.getPaginationAnimals(skipNumber, pageSize);//get the paginated data
      type = 'all';//set the type to all

    } else {
      totalAnimals = await animalService.getAnimalCountByType(type);//get the total number of animals by type
      paginatedAnimals = await animalService.getPaginationAnimalsByType(type, skipNumber, pageSize);//get the paginated data by type
    }

    const totalPages = Math.ceil(totalAnimals / pageSize);


    if (!paginatedAnimals) {
      return res.status(404).send('Animals not found');
    }

    // pass the data to the view
    res.render('animal/animal', {
      paginatedAnimals,
      type,
      currentPage,
      totalPages
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// get animal detail
const getAnimalById = async (req, res) => {
  const id = req.params.id;
  const apiKey = appConfig.googleMapsApiKey;

  try {
    const animal = await animalService.getAnimalById(id);
    const animalList = await animalService.getPaginationAnimalsByType(animal.type, 0, 10);
    if (!animal) {
      return res.status(404).send('Animal not found');
    }
    // pass the data to the view
    res.render('animal/animalDetail', {
      animal,
      animalList,
      apiKey
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

//export functions
module.exports = {
  getAnimalList,
  getAnimalById
};