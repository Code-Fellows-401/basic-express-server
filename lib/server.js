'use strict';

const express = require('express');
const app = express();
const logger = require('./middleware/logger');
const error404 = require('./error-handlers/404');
const error500 = require('./error-handlers/500');
const teamRoute = require('./routes/team');
const coachRoute = require('./routes/coach');
const personRoute = require('./routes/person');

app.use(express.json());
app.use(logger);

app.use(personRoute);
app.use(teamRoute);
app.use(coachRoute);

app.use(error404);
app.use(error500);

module.exports = {
	app,
	start: (port) => {
		app.listen(port, () => console.log('server listening on', port));
	},
};
