var path = require('path');
var root = path.resolve(__dirname);
var fs = require('fs');

var config = {
	"RELEASE" : process.env.NODE_ENV == "production",
	ws_port : [8080, false],
	ssl : {
		key: path.resolve(root, "../common/cert/214352880350098.key"),
		cert: path.resolve(root, "../common/cert/214352880350098.pem")
	},
	wanxiang_token: "e45a56e3267a9eb5f555be0d808c656d3eead9af12dfaaf9159894ceb74fba1f"
};

if(config["RELEASE"]){
	config["ws_port"][1] = true;
}

module.exports = config;
