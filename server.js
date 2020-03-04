#!/usr/bin/env node
const db = require('./db');
const express = require('express');
const app = express();

app.use(express.json());

require('./routes/routeindex')(app);

// Port Environment variable
const PORT = process.env.PORT || 5000;

db.sequelize.sync().then(() => {
  console.log('db and tables have been created');
  app.listen(PORT, () => {
    console.log(`App listening on Port ${PORT}`);
  });
});
