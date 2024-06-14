//import services
const eventService = require('../services/eventService');


//get home page data
const getHome = async (req, res) => {
  try {
    const events = await eventService.getPaginationEvents(0, 3);
    res.render('home',
      {
        events
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

//get about page
const getAbout = (req, res) => {
  res.render('home/about');
}

//export controller
module.exports = {
  getHome,
  getAbout
};