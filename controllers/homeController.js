//import services
const eventService = require('../services/eventService');


//get home page data
const getHome = async (req, res) => {
  try {
    const events = await eventService.getPaginationEvents(0, 3);
    return res.render('home',
      {
        events
      });
  } catch (error) {
    console.log('Error getting events:', error.message);

    return res.render('home/error', { message: 'Sorry, Error in geeting data.' });
  }
}

//get about page
const getAbout = (req, res) => {
  res.render('home/about');
}

// get error page
const getError = (req, res) => {
  res.render('home/error');
}

//export controller
module.exports = {
  getHome,
  getAbout,
  getError
};