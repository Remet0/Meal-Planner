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
    return res
      .status(400)
      .send({ status: 400, message: 'Username is missing' });
  }
  if (!password) {
    return res
      .status(400)
      .send({ status: 400, message: 'Password is missing' });
  }

  try {
    //find user in database
    const user = await User.findOne({ where: { username: username } });
    if (!user) {
      return res.status(400).send({ status: 400, message: 'User not found' });
    }
    //compare entered password to stored password
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res
        .status(401)
        .send({ status: 401, message: 'Username or Password do not match' });
    }
    //create a token and store it in the request
    req.tokenString = CreateToken(user);
    //move to next route
    next();
  } catch {
    return res
      .status(500)
      .send({ status: 500, message: 'Error processing request' });
  }
};
