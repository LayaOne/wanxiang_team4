exports.deleteExt = function(data, cb){
	while(data[data.length - 1] == "{"){
		data = data.substring(0, data.length - 1);
	}
	
	cb(data);
}

exports.addExt = function(data, cb){
	var paddingStr = "";
	var mode = 16 - (data.length % 16);

	while(mode) {
		paddingStr += "{";
		mode -= 1;
	}

	data = Buffer.concat([data, Buffer.from(paddingStr)]);
	cb(data);
}