const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

function asyncErrorHandler(callback) {
  return async function (req, res, next) {
    try {
      return callback(req, res, next);
    } catch (error) {
      next(error);
    }
  };
}

const authRequired = (req, res, next) => {
  const token = req.signedCookies.token;
  // console.log("Cookie Token:", token);
  try {
    const user = jwt.verify(token, JWT_SECRET);
    req.user = user;
    // console.log("REQ.USER: ", req.user);
  } catch (error) {
    res.status(401).send({
      loggedIn: false,
      message: "You are not authorized.",
    });
    return;
  }
  next();
};

module.exports = {
  asyncErrorHandler,
  authRequired,
};
