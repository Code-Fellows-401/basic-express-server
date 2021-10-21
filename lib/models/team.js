'use strict';

const Team = (sequelize, DataTypes) =>
	sequelize.define('Team', {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		city: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	});

module.exports = Team;
