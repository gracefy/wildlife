// Export appConfig object with properties
require('dotenv').config();
const path = require('path');
const swaggerJsdoc = require('swagger-jsdoc');

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Wildlife Data Dictionary',
      version: '1.0.0',
      description: 'Wildlife Data Dictionary API generated with express',
    }
  },
  apis: ['../routes/*.js', '../models/*.js'],
}

const swaggerDocs = swaggerJsdoc(swaggerOptions);


const appConfig = {
  port: process.env.PORT,
  env: process.env.NODE_ENV,
  logLevel: process.env.LOG_LEVEL,
  sessionSecret: process.env.SESSION_SECRET,
  googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
  publicPath: path.join(__dirname, '../public'),
  viewPath: path.join(__dirname, '../views'),
  bootstrapPath: path.join(__dirname, '../node_modules/bootstrap/dist/'),
};

module.exports = {
  appConfig,
  swaggerDocs
};