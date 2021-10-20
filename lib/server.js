'use strict';

const express = require('express');
const app = express();
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const error404 = require('./error-handlers/404');
const error500 = require('./error-handlers/500');

app.use(express.json());
app.use(logger);

app.get('/person', validator, (req, res) => {
	let name = req.query;
	res.status(200).send(name);
});

app.use(error404);
app.use(error500);

module.exports = {
	app,
	start: (port) => {
		app.listen(port, () => console.log('server listening on', port));
	},
};
