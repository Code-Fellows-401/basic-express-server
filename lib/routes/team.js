'use strict';

const express = require('express');
const router = express.Router();
const { Team } = require('../models');
const validator = require('../middleware/validator');

router.get('/team', async (req, res) => {
	const teamInfo = await Team.findAll();
	res.send(teamInfo);
});

router.get('/team:id', async (req, res) => {
	let id = +req.params.id;
	const teamInfo = await Team.findOne(id);
	res.send(teamInfo);
});

router.post('/team', validator, async (req, res) => {
	const newTeam = {
		name: req.params.name,
		city: req.params.city,
	};
	res.status(200).send(newTeam);
});

// Make a id-validator to check for the pressance of an ID before sending the request.
router.put('/team:id', async (req, res) => {
	let id = +req.params.id;
	const findTeam = await Team.findOne({
		where: { id },
	});
	let updateTeam = await findTeam.update(req.body);
	res.status(200).send(updateTeam);
});

router.delete('/team:id', async (req, res) => {
	let id = +req.params.id;
	await Team.destroy({
		where: {
			id: id,
		},
	});
	res.status(200).send('Deleted');
});

module.exports = router;
