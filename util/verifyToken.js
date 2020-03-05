const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

module.exports = verifyToken = jwtToken => {
  try {
    return jwt.verify(jwtToken, JWT_SECRET);
  } catch (e) {
    console.log(`error: ${e}`);
    return null;
  }
};
