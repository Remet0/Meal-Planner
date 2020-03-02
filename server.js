#!/usr/bin/env node
const db = require('./db');
const express = require('express');
const app = express();

require('./routes/routeindex')(app);

app.use(express.json());
// Port Environment variable
const PORT = process.env.PORT || 5000;

app.listen(PORT);
console.log('server running on port', PORT);
