var path = require('path');
var root = path.resolve(__dirname);

var config = {
    "RELEASE" : process.env.NODE_ENV == "production",
    "MONGO_DB" : {
		"URL" : "mongodb://127.0.0.1:3001/wanxiang_team4"
    }
};

if(config["RELEASE"]){

}else{

}

module.exports = config;
