const express = require('express');
let createToken = require('../util/createToken');
const User = require('../db');
const authRoutes = express.Router();
const bcrypt = require('bcrypt');
const loginUser = require('../util/loginUser');

//register user
authRoutes.post('/user', async (req, res) => {
  //destructer req.body
  let { username, password, email, admin } = req.body;

  //trim down username and password so its more managable
  username = username.trim().toLowerCase();
  password = password.trim();

  //encrypt password
  const encryptPass = await bcrypt.hash(password, 10);

  try {
    //query to create new user with given info
    const user = await User.create({
      username: username,
      password: encryptPass,
      email: email,
      admin: admin
    });
    res.status(200).send({ user });
  } catch {
    res.status(400).send({ status: 400, message: 'error making user' });
  }
});

authRoutes.post('/user/login', loginUser, async (req, res) => {
  //get username from request
  const { username } = req.body;
  //check if username exists
  if (!username) {
    return res
      .status(400)
      .send({ status: 400, message: 'No username provided' });
  }
  //check if token qas attached correctly
  if (!req.tokenString) {
    return res
      .status(400)
      .send({ status: 400, message: 'Missing Auth header' });
  }
  //find user
  const user = await User.findOne({ where: { username: username } });
  if (!user) {
    return res.status(400).send({ status: 400, message: 'no user data' });
  }
  //store user data in object with token
  const userData = {
    token: req.tokenString,
    user: user
  };
  return res.status(200).send(userData);
});

module.exports = authRoutes;
