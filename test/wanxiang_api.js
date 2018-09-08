var api = require("../logic/wancloud/api");
var net_op = require("../utils/net_op");

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

api.set("pengchuanshi sb", {"type": 111, "content": "test"}, function(err, res){
	console.log(err, res.body);
});


/*
net_op.https_request({
	host: 'api.wancloud.io',
	port: 443,
	path: "/apis/bcs/entry",
}, function(err, buf){
	var data = buf.toString();
	console.log(err, data);
});
*/