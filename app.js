// Importing dependencies
const express = require('express');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const path = require('path');
const cookieParser = require('cookie-parser');

//swagger
const swaggerUi = require('swagger-ui-express');

//import swaggerDocs
const { swaggerDocs } = require('./configs/appConfig');

//import configs
const appConfig = require('./configs/appConfig');
const { connectDB, dbConfig } = require('./configs/dbConfig');

// import routes
const animalRoute = require('./routes/animalRoute');
const eventRoute = require('./routes/eventRoute');
const blogRoute = require('./routes/blogRoute');
const homeRoute = require('./routes/homeRoute');
const userRoute = require('./routes/userRoute');
const volunteerRoute = require('./routes/volunteerRoute');

//impot custom middleware
const animalTypeMiddleware = require('./middleware/animalTypeMiddleware');
const storeOriginalPage = require('./middleware/storeOriginalPage');
const setUserInfo = require('./middleware/setUserInfo');

// Create an express app
const app = express();

//use swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Parse url-encoded body
app.use(express.urlencoded({ extended: false }));

//use session

const store = new MongoDBStore({
  uri: dbConfig.mongoURI,
  collection: 'sessions'
});

app.use(session({
  secret: appConfig.sessionSecret,
  resave: false,
  saveUninitialized: false,
  store: store,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24  // 1 day
  }
}));


//set view engine with ejs
app.set('view engine', 'html');
app.engine('.html', require('ejs').renderFile);

//set path to views/public folder
app.set('views', appConfig.viewPath);
app.use(express.static(appConfig.publicPath));
//path to bootstrap
app.use('/bootstrap', express.static(appConfig.bootstrapPath));

//use custom middleware
app.use(storeOriginalPage);
app.use(setUserInfo);
app.use(animalTypeMiddleware);

//use middleware for current path
app.use((req, res, next) => {
  res.locals.currentPath = req.path;
  next();
});


//use routes
app.use('/animal', animalRoute);

app.use('/event', eventRoute);

app.use('/blog', blogRoute);

app.use('/', homeRoute);

app.use('/about', homeRoute);

app.use('/', userRoute);

app.use('/', volunteerRoute);

// Connect to database
connectDB();

// Listen to port
const PORT = appConfig.port || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on  http://localhost:${PORT}`);
});