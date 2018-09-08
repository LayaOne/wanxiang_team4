/**
 * Module dependencies.
 */
const winston = require('winston');
const moment = require('moment');

module.exports = (function(){
	return new mlogger();
})();

/*
{
  error: 0,
  warn: 1,
  info: 2,
  verbose: 3,
  debug: 4,
  silly: 5
}
*/
function mlogger(){
	this.logger = null;
}

mlogger.prototype.init = function(dir, filename){
	const tsFormat = () => moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
	const self = this;	

	self.logger = winston.createLogger({
		transports: [
			// colorize the output to the console
			new (winston.transports.Console)({
				timestamp: tsFormat,
				colorize: true,
				level: 'debug'
			}),
			new (require('winston-daily-rotate-file'))({
				filename: `${dir}/-${filename}.log`,
				timestamp: tsFormat,
				datePattern: 'yyyy-MM-dd',
				prepend: true,
				level: "info",
				json : false
			})
		]
	});
	
	["error", "warn", "info", "verbose", "debug", "silly"].forEach(function(level){
		Object.defineProperty(self, level, {
			get : function () {
				return self.logger[level];
			}
		});
	});
}