const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

module.exports = CreateToken = userData => {
  if (!userData) {
    return 'false';
  }
  const payload = {
    id: userData.id,
    username: userData.username,
    admin: userData.admin
  };

  return jwt.sign(payload, JWT_SECRET, { expiresIn: '24h' });
};
