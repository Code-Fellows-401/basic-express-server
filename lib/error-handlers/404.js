'use strict';

module.exports = function (err, req, response, next) {
	response.sendStatus(404);
	response.end();
};
