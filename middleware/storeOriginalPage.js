
const storeOriginalPage = (req, res, next) => {
  if (req.method === 'GET' && req.originalUrl !== '/user/login' && req.originalUrl !== '/user/register') {

    // Store the original page
    req.session.originalPage = req.originalUrl;
  }

  // Continue to the next middleware
  next();
}

module.exports = storeOriginalPage;