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
	wanxiang_token: "20a6386f7e0708cc01edc67b30fee9f30520a921620fdaa5e874220834054663"
};

if(config["RELEASE"]){
	config["ws_port"][1] = true;
}

module.exports = config;
