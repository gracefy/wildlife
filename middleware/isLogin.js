//validate if user is logged in
const isLogin = (req, res, next) => {
  if (!req.session.userid) {
    return res.redirect('/user/login');
  }
  next();
}

module.exports = isLogin;