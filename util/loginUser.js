const CreateToken = require('./createToken');
const bcrypt = require('bcrypt');
const User = require('../db');

module.exports = loginUser = async (req, res, next) => {
  //deconstruct username and password from req.body
  let { username, password } = req.body;
  //trim down variables so its easier to manage
  username = username.trim().toLowerCase();
  password = password.trim();
  //check for username and password
  if (!username) {
    res.status(400).send('Username is missing');
  }
  if (!password) {
    res.status(400).send('Password is missing');
  }

  try {
    //find user in database
    const user = await User.findOne({ where: { username: username } });
    if (!user) {
      return res.status(400).send('User not found');
    }
    //compare entered password to stored password
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).send('Username or Password do not match');
    }
    //create a token and store it in the request
    req.tokenString = CreateToken(user);
    //move to next route
    next();
  } catch {
    return res.status(500).send('Error processing request');
  }
};
