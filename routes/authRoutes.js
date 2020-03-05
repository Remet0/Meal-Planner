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
    //calls createToken function which signs a new token with user info
    const token = await createToken(user);
    //return user and token
    res.status(200).send({ user, token });
  } catch {
    res.status(400).send('error making user');
  }
});

authRoutes.post('/user/login', loginUser, async (req, res) => {
  const { username } = req.body;
  if (!username) {
    return res.status(400).send('No username provided');
  }

  if (!req.tokenString) {
    return res.status(400).send('Missing Auth header');
  }

  const user = await User.findOne({ where: { username: username } });
  if (!user) {
    return res.status(400).send('no user data');
  }

  const userData = {
    token: req.tokenString,
    user: user
  };
  return res.status(200).send(res, userData);
});

module.exports = authRoutes;
