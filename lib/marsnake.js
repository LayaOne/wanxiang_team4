/**
 * Module dependencies.
 */
const application = require("./application");
//const package = require("../package");
const fs = require("fs");
const path = require("path");

/**
 * Expose `createApplication()`.
 *	
 * @module
 */
var Marsnake = module.exports = {};

/**
 * Framework version.
 */
//Marsnake.version = package.version;

/**
 * infrastructure
 */
Marsnake.infrastructures = {};

/**
 * auto loaded components
 */
Marsnake.components = {};

/**
 * Create an Marsnake application.
 *
 * @return {Application}
 */
Marsnake.create_app = function (opts, cb) {
	var app = application;
	app.init(this, opts, cb);

	return app;
};

Marsnake.start = function(app, cb) {
	app.start(cb);
};

Marsnake.stop = function(app, cb) {
	app.stop(cb);
};

/**
 * Get application
 */
Object.defineProperty(Marsnake, 'app', {
	get : function () {
		return self.app;
	}
});

fs.readdirSync(__dirname + '/infrastructure').forEach(function (filename) {
	if (!/\.js$/.test(filename)) {
		return;
	}
	
	var name = path.basename(filename, '.js');
	var _load = load.bind(null, './infrastructure/', name);
	
	Marsnake.infrastructures.__defineGetter__(name, _load);
});

function load(path, name) {
	if (name) {
		return require(path + name);
	}
	return require(path);
}