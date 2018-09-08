var api = require("../logic/wancloud/api");
var net_op = require("../utils/net_op");

/*
api.set("pengchuanshi sb", {"type": 111, "content": "test"}, function(err, res){
	console.log(err, res);
});
*/

net_op.https_request({
	host: 'api.wancloud.io',
	port: 443,
	path: "/apis/bcs/entry"
}, function(err, buf){
	console.log(err, buf);
});
