const express = require('express');
let createToken = require('../util/createToken');
const User = require('../models/userModel');
const authRoutes = express.Router();

authRoutes.post('/user', async (req, res) => {
  let { username, password, admin } = req.body;

  username = username.trim().toLowerCase();
  password = password.trim();

  try {
    const user = await User.create({
      username: username,
      password: password,
      admin: admin
    });
    const token = await createToken(user);
    res.status(200).send({ user, token });
  } catch {
    res.status(400).send('error making user');
  }
  res.status(200).send('req working');
});

module.exports = authRoutes;
