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
module.exports = userRoutes;
