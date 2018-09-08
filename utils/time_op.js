/**
 * Module dependencies.
 */
var utils = {};

utils.now = function(){
	return Date.parse(new Date()) / 1000;
}

module.exports = utils;