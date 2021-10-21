'use strict';

const dotenv = require('dotenv').config();
const { db } = require('./lib/models/index');
const { start } = require('./lib/server');
const app = require('./lib/server');
const PORT = process.env.PORT || 3000;

db.sync().then(() => start(PORT));
