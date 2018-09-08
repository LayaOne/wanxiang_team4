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
	wanxiang_token: "ca0005a1662fa8b662e83098466d5abafd063ab5878c8753835537212852239c"
};

if(config["RELEASE"]){
	config["ws_port"][1] = true;
}

module.exports = config;
