'use strict';

module.exports = function (req, response, next) {
	console.log('we are in the 404');
	response.sendStatus(404);
	response.end();
};
