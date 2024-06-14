
const storeOriginalPage = (req, res, next) => {
  if (req.method === 'GET' && req.originalUrl !== '/login' && req.originalUrl !== '/register') {

    // Store the original page
    req.session.originalPage = req.originalUrl;
  }

  // Continue to the next middleware
  next();
}

module.exports = storeOriginalPage;