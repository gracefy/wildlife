const userService = require('../services/userService');


const isAddressExist = async (req, res, next) => {
  try {
    const userid = req.session.userid;
    const user = await userService.getUserById(userid);

    if (user && user.address) {
      req.userHasAddress = true;
    } else {
      req.userHasAddress = false;
    }

    next();
  } catch (error) {
    res.status(500).send('Server error');
  }
}

module.exports = isAddressExist;