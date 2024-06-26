//set user name to locals
const setUserInfo = (req, res, next) => {
  res.locals.username = req.session.username || null;
  res.locals.userid = req.session.userid || null;
  res.locals.useremail = req.session.email || null;
  next();
}

module.exports = setUserInfo;