const express = require('express');
let createToken = require('../util/createToken');
const User = require('../db');
const userRoutes = express.Router();
const verifyToken = require('../util/verifyToken');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

userRoutes.get('/:username', verifyToken, async (req, res) => {
  const username = req.params.username.toLowerCase();
  //verify token
  jwt.verify(req.token, JWT_SECRET, (err, data) => {
    if (err) {
      return res.status(403).send({ status: 403, message: 'Not Authorized' });
    }
    //check to see if provided username matches the tokens stored username
    const notMatch = username !== data.username;
    //if they don match then block access to data
    if (notMatch) {
      return res.status(401).send({
        status: 401,
        message: 'You are not allowed to access that user, please login'
      });
    }
    res.status(200).send(data);
  });
});

//sends all user data to populate profile Page or use for recipe search
userRoutes.get('/profile/:username', verifyToken, async (req, res) => {
  //set username from fretch request
  const username = req.params.username.toLowerCase();
  jwt.verify(req.token, JWT_SECRET, (err, data) => {
    if (err) {
      return res.status(403).send({ status: 403, message: 'Not Authorized' });
    }
    const notMatch = username !== data.username;
    //if they don match then block access to data
    if (notMatch) {
      return res.status(401).send({
        status: 401,
        message: 'You are not allowed to access that user, please login'
      });
    }
  });

  if (!username) {
    return res
      .status(400)
      .send({ status: 400, message: 'Username is missing' });
  }

  try {
    const user = await User.findOne({ where: { username: username } });
    if (!user) {
      return res.status(400).send({ status: 400, message: 'User not found' });
    }
    return res.status(200).send(user);
  } catch {
    return res
      .status(500)
      .send({ status: 500, message: 'Error processing request' });
  }
});
module.exports = userRoutes;
