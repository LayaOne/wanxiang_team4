/**
 * Module dependencies.
 */
const constants = require("./lib/util/constants");
const crypto = require("crypto");
const mlogger = require("./utils/mlogger");
const browser_mgr = require("./logic/browser/browser_mgr");

var child = module.exports = {};
var self = child;

child.init = function() {
	self.pid = process.pid;
	
	mlogger.init("./log", "child");
	mlogger.info("child started");
};

child.send2browser = function(id, packet, close){
	process.send({
		"packet" : JSON.stringify(packet),
		"opts" : {
			"id" : id,
			"role" : constants.SOCKET_TYPE.WEBSOCKET,
			"closed" : close
		}
	});
}

child.init();

process.on('disconnect',function() {
	process.kill();
});

process.on("message", function(data){
	var packet = data["packet"];
	var opts = data["opts"];
	var role = opts["role"];
	var id = opts["id"];

	switch(role){
		case constants.SOCKET_TYPE.WEBSOCKET:
			
			if(opts["closed"]){
				browser_mgr.remove_browser(id);
			}else{
				browser_mgr.handle(packet, id, child.send2browser);
			}
			
			break;
		default:
			//error
			return;
	}
});