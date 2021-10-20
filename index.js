'use strict';

const dotenv = require('dotenv').config();
const app = require('./lib/server');
const PORT = process.env.PORT || 3000;

app.start(PORT);
