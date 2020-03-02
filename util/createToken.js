const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'SuperSecret';

module.exports = CreateToken = userData => {
  if (!userData) {
    return 'false';
  }
  const payload = {
    _id: userData._id,
    username: userData.username,
    admin: userData.admin
  };

  return jwt.sign(payload, JWT_SECRET);
};
