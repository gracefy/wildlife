// Export appConfig object with properties
require('dotenv').config();
const path = require('path');
const swaggerJsdoc = require('swagger-jsdoc');
const { route } = require('../routes/animalRoute');
const { model } = require('mongoose');

const appConfig = {
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV,
  logLevel: process.env.LOG_LEVEL,
  sessionSecret: process.env.SESSION_SECRET,
  googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
  publicPath: path.join(__dirname, '../public'),
  viewPath: path.join(__dirname, '../views'),
  routesPath: path.join(__dirname, '../routes'),
  modelsPath: path.join(__dirname, '../models'),
  bootstrapPath: path.join(__dirname, '../node_modules/bootstrap/dist/'),
  jqueryPath: path.join(__dirname, '../node_modules/jquery/dist/'),
};


const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Wildlife Data Dictionary',
      version: '1.0.0',
      description: 'Wildlife Data Dictionary API generated with express',
    }
  },
  apis: [path.join(appConfig.routesPath, '*.js'), path.join(appConfig.modelsPath, '*.js')],
}

const swaggerDocs = swaggerJsdoc(swaggerOptions);

module.exports = {
  appConfig,
  swaggerDocs
};