const CreateToken = require('./createToken');
const bcrypt = require('bcrypt');
const User = require('../db');

module.exports = loginUser = async (req, res, next) => {
  let { username, password } = req.body;

  username = username.trim().toLowerCase();
  password = password.trim();

  if (!username) {
    res.status(400).send('Username is missing');
  }
  if (!password) {
    res.status(400).send('Password is missing');
  }

  try {
    const user = await User.findOne({ where: { username: username } });
    if (!user) {
      return res.status(400).send('User not found');
    }
    console.log(`user info: \n ${user}`);
    const match = await bcrypt.compare(password, user.password);
    console.log('after match');
    if (!match) {
      return res.status(401).send('Username or Password do not match');
    }
    console.log('before token');
    req.tokenString = CreateToken(user);
    next();
  } catch {
    return res.status(500).send('Error processing request');
  }
};
