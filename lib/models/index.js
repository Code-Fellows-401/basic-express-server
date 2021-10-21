'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const TeamModel = require('./team');
const CoachModel = require('./coach');

let DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory';

const sequelize = new Sequelize(DATABASE_URL);

const teamTable = TeamModel(sequelize, DataTypes);
const coachTable = CoachModel(sequelize, DataTypes);

module.exports = {
	db: sequelize,
	Team: teamTable,
	Coach: coachTable,
};
