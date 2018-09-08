var api = require("../logic/wancloud/api");
var net_op = require("../utils/net_op");

(async function(){
	try{
		//let body = await api.set("pengchuanshi", {"type": 111, "content": "test"});
		//console.log(body);
		
		let obj = await api.get("f05f78dea6e1922df7a2c8d7d9ab60b3");
		console.log(obj);
	}catch(err){
		console.log(err);
	}
	
})();


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