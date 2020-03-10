const express = require('express');
let createToken = require('../util/createToken');
const User = require('../db');
const userRoutes = express.Router();
const verifyToken = require('../util/verifyToken');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

userRoutes.get('/', verifyToken, async (req, res) => {
  jwt.verify(req.token, JWT_SECRET, (err, data) => {
    if (err) {
      res.status(403).send('Not Authorized');
    }
    res.status(200).send(data);
  });
});
module.exports = userRoutes;
