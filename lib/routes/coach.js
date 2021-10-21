'use strict';

const express = require('express');
const router = express.Router();
const Coach = require('../models/coach');
const validator = require('../middleware/validator');

router.get('/coach', validator, async (req, res) => {
	const coachInfo = await Coach.findAll();
	res.send(coachInfo);
});

router.get('/coach:id', validator, async (req, res) => {
	let id = +req.params.id;
	const coachInfo = await Coach.findOne(id);
	res.send(coachInfo);
});

router.post('/coach', validator, async (req, res) => {
	const newCoach = {
		name: +req.params.name,
		position: req.params.city,
	};
	res.status(200).send(newCoach);
});

// Make a id-validator to check for the pressance of an ID before sending the request.
router.put('/coach:id', async (req, res) => {
	let id = +req.params.id;
	const findCoach = await Coach.findOne({
		where: { id },
	});
	let updateCoach = await findCoach.update(req.body);
	res.status(200).send(updateCoach);
});

router.delete('/coach:id', async (req, res) => {
	let id = +req.params.id;
	await Coach.destroy({
		where: {
			id: id,
		},
	});
	res.status(200).send('Deleted');
});

module.exports = router;
