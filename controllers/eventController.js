//import services
const eventService = require('../services/eventService');

// get event list
const getEventList = async (req, res) => {


  const title = req.query.search_query;

  //get the current page, by default it is 1
  let currentPage = req.query.page ? parseInt(req.query.page) : 1;
  const pageSize = 6;
  const skipNumber = (currentPage - 1) * pageSize;

  let totalEvents;
  let paginatedEvents;

  try {

    if (title) {

      totalEvents = await eventService.getSearchEventCount(title);//get the total number of events
      paginatedEvents = await eventService.getPaginationEventsByKeyword(title);//get the paginated data

    } else {

      totalEvents = await eventService.getEventCount();//get the total number of events
      paginatedEvents = await eventService.getPaginationEvents(skipNumber, pageSize);//get the paginated data
    }

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