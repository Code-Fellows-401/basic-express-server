'use strict';

const Coach = (sequelize, DataTypes) =>
	sequelize.define('Coach', {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		position: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	});

module.exports = Coach;
