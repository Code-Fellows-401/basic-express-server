'use strict';

const express = require('express');
const router = express.Router();
const validator = require('../middleware/validator');

router.get('/person', validator, (req, res) => {
	let name = req.query;
	res.status(200).send(name);
});

module.exports = router;
