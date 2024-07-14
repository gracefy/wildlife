//import the database connection
const { connectDB } = require('../configs/dbConfig');

//import the seed functions
const seedAnimalType = require('./seedAnimalType');
const seedLocation = require('./seedLocation');
const seedAnimal = require('./seedAnimal');
const seedEvent = require('./seedEvent');
const seedBlog = require('./seedBlog');
const seedAddress = require('./seedAddress');
const seedUser = require('./seedUser');
const seedComment = require('./seedComment');
const seedDonation = require('./seedDonation');
const mongoose = require('mongoose');

const seedData = async () => {
  try {
    await connectDB();

    //Seed Animal Types
    await seedAnimalType();

    //Seed Locations
    await seedLocation();

    //Seed Animals
    await seedAnimal();

    //Seed Events
    await seedEvent();

    //Seed Blogs
    await seedBlog();

    // Seed Address
    await seedAddress();

    // Seed User
    await seedUser();

    // Seed Comment
    await seedComment();

    // Seed Donation
    await seedDonation();

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

