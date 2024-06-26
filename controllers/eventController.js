//import services
const eventService = require('../services/eventService');

// get event list
const getEventList = async (req, res) => {
  //get the current page, by default it is 1
  let currentPage = req.query.page ? parseInt(req.query.page) : 1;
  const pageSize = 6;
  const skipNumber = (currentPage - 1) * pageSize;

  try {
    const totalEvents = await eventService.getEventCount();//get the total number of events
    const paginatedEvents = await eventService.getPaginationEvents(skipNumber, pageSize);//get the paginated data

    const totalPages = Math.ceil(totalEvents / pageSize);

    if (!paginatedEvents) {
      return res.status(404).send('Events not found');
    }

    // pass the data to the view
    res.render('v-event/event', {
      paginatedEvents,
      currentPage,
      totalPages
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


module.exports = {
  getEventList
}