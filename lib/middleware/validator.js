'use strict';

module.exports = function (req, res, next) {
	let { name } = req.query;
	if (name) {
		next();
	} else {
		next('No Name Detected');
	}
};
