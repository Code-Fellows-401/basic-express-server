'use strict';

const express = require('express');
const router = express.Router();
const { Team } = require('../models');

router.get('/team', async (req, res) => {
	let teamInfo = await Team.findAll();
	res.status(200).json(teamInfo);
});

router.get('/team/:id', async (req, res) => {
	let id = +req.params.id;
	const findTeam = await Team.findOne({
		where: { id },
	});
	res.send(findTeam);
});

router.post('/team', async (req, res) => {
	// let obj = req.body
	let newTeam = await Team.create({
		name: req.body.name,
		city: req.body.city,
	});
	res.status(200).json(newTeam);
});

router.put('/team/:id', async (req, res) => {
	let id = +req.params.id;
	const findTeam = await Team.findOne({
		where: { id },
	});
	let updateTeam = await findTeam.update(req.body);
	res.status(200).json(updateTeam);
});

router.delete('/team/:id', async (req, res) => {
	let id = +req.params.id;
	await Team.destroy({
		where: {
			id: id,
		},
	});
	res.status(200).send('Deleted');
});

module.exports = router;
