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
	wanxiang_token: "cfa1b767741bf8238c31706673181c16132710e7e1b1d35999c697f057e8092c"
};

if(config["RELEASE"]){
	config["ws_port"][1] = true;
}

module.exports = config;
