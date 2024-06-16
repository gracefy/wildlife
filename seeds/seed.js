//import the database connection
const { connectDB } = require('../configs/dbConfig');

//import the seed functions
const seedAnimalTypes = require('./seedAnimalTypes');
const seedLocations = require('./seedLocations');
const seedAnimals = require('./seedAnimals');
const seedEvents = require('./seedEvents');
const seedBlogs = require('./seedBlogs');
const mongoose = require('mongoose');

const seedData = async () => {
  try {
    await connectDB();

    //Seed Animal Types
    await seedAnimalTypes();

    //Seed Locations
    await seedLocations();

    //Seed Animals
    await seedAnimals();

    //Seed Events
    await seedEvents();

    //Seed Blogs
    await seedBlogs();

    console.log('>>>>>>>>>>>>> All Data seeded! <<<<<<<<<<<<<<<<');
    mongoose.connection.close();
    process.exit();


  } catch (err) {
    console.error('Data seeding error: ', err);
    mongoose.connection.close();
    process.exit(1);
  }
}

seedData();

