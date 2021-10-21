'use strict';

const express = require('express');
const router = express.Router();
const { Coach } = require('../models');

router.get('/coach', async (req, res) => {
	const coachInfo = await Coach.findAll();
	res.status(200).json(coachInfo);
});

router.get('/coach/:id', async (req, res) => {
	let id = +req.params.id;
	const coachInfo = await Coach.findOne({
		where: { id },
	});
	res.send(coachInfo);
});

router.post('/coach', async (req, res) => {
	// let obj = req.body;
	let newCoach = await Coach.create({
		name: req.body.name,
		position: req.body.position,
	});
	res.status(200).json(newCoach);
});

router.put('/coach/:id', async (req, res) => {
	let id = +req.params.id;
	const findCoach = await Coach.findOne({
		where: { id },
	});
	let updateCoach = await findCoach.update(req.body);
	res.status(200).json(updateCoach);
});

router.delete('/coach/:id', async (req, res) => {
	let id = +req.params.id;
	await Coach.destroy({
		where: {
			id: id,
		},
	});
	res.status(200).send('Deleted');
});

module.exports = router;
