'use strict';

module.exports = function (err, req, res, next) {
	console.log(req.method);
	next();
};
