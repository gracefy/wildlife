//import the database connection
const connectDB = require('../configs/dbConfig');

//import the seed functions
const seedAnimalTypes = require('./seedAnimalTypes');
const seedLocations = require('./seedLocations');
const seedAnimals = require('./seedAnimals');
const seedEvents = require('./seedEvents');
const seedBlogs = require('./seedBlogs');

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
    process.exit();
    connectDB.close();

  } catch (err) {
    console.error('Data seeding error: ', err);
    process.exit(1);
    connectDB.close();

  }
}

seedData();

