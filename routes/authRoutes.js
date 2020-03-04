const express = require('express');
let createToken = require('../util/createToken');
const User = require('../db');
const authRoutes = express.Router();

authRoutes.post('/user', async (req, res) => {
  let { username, password, email, admin } = req.body;

  username = username.trim().toLowerCase();
  password = password.trim();

  console.log(
    `username: ${username} \npassword: ${password} \nemail: ${email} \nadmin: ${admin}`
  );
  try {
    console.log('start of try catch');
    const user = await User.create({
      username: username,
      password: password,
      email: email,
      admin: admin
    });
    const token = await createToken(user);

    res.status(200).send({ user, token });
  } catch {
    res.status(400).send('error making user');
  }
});

module.exports = authRoutes;
