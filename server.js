#!/usr/bin/env node
const db = require('./db');
const http = require('http');
const express = require('express');

const app = express();

app.use(express.json());
// Port Environment variable
const PORT = process.env.PORT || 5000;

// Creating the node server
const SERVER = http.createServer();

// Firing up the server on selected port
SERVER.listen(PORT);

SERVER.on('listening', () => {
  console.log('[Server]::LISTEN:%s', PORT);
});

// Callback function for checking connecting or error
SERVER.on('error', error => {
  throw new Error(`[Server]::ERROR:${error.message}`);
});
