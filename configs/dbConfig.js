
require('dotenv').config();
const mongoose = require('mongoose');

const dbConfig = {
  mongoURI: process.env.MONGO_URI,
};

const connectDB = async () => {
  try {
    await mongoose.connect(dbConfig.mongoURI);
    console.log(dbConfig.mongoURI)
    console.log('MongoDB Atlas connected successfully!');
  } catch (err) {
    console.error(err.message);
    process.exit(1); //exit process with failure
  }
}

module.exports = {
  connectDB,
  dbConfig
};