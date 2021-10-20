'use strict';

module.exports = function (err, req, res, next) {
	console.log('we are in the 500');
	res.send(500);
	res.end();
};
