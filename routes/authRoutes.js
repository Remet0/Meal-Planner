const express = require('express');
const authRoutes = express.Router();

authRoutes.get('/register', (req, res) => {
  res.status(200).send('req working');
});

module.exports = authRoutes;