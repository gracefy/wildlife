//set user name to locals
const setUserInfo = (req, res, next) => {
  res.locals.username = req.session.username || null;
  res.locals.userid = req.session.userid || null;
  next();
}

module.exports = setUserInfo;