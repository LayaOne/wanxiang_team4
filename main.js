/**
 * Module dependencies.
 */
const marsnake = require("./lib/marsnake.js");
const constants = require("./lib/util/constants.js");
const mlogger = require("./utils/mlogger");
const config = require("./config");

var component_lego = {};

component_lego[constants.COMPONENT.TCP_SESSION] = constants.COMPONENT_LEGO.TCP_SESSION;
component_lego[constants.COMPONENT.TCP_SESSION_MGR] = constants.COMPONENT_LEGO.TCP_SESSION_MGR;
component_lego[constants.COMPONENT.WS_SESSION] = constants.COMPONENT_LEGO.WS_SESSION;
component_lego[constants.COMPONENT.WS_SESSION_MGR] = constants.COMPONENT_LEGO.WS_SESSION_MGR;
component_lego[constants.COMPONENT.STREAM_PARSER] = constants.COMPONENT_LEGO.TRANSFER_PARSER;
component_lego[constants.COMPONENT.MASTER_PROCESS] = constants.COMPONENT_LEGO.MASTER_PROCESS;

mlogger.init("./log", "main");

var app = marsnake.create_app({
	"components" : component_lego,
	"infrastructures" : [{
		"name" : "ipc",
		"opts" : {
			"path" : __dirname + "/child.js"
		}
	}, {
		"name" : "ws_by_ws",
		"opts" : {
			"port" : config.ws_port,
			"ssl" : config.ssl,
		}
	}]
}, function(err){
	if(err){
		mlogger.warn(err);
	}
});

marsnake.start(app, function(err){
	if(err){
		mlogger.error("start application error " + err);
		
		marsnake.stop(app, function(err){
			mlogger.info("server stopped with error:" + err);
		});
	}

	mlogger.info("server started in " + (config.RELEASE ? "Production" : "Development"));
});
