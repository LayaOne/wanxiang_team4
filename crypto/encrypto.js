const crypto = require('crypto');
const { addExt } = require('../utils/padding_deal');

module.exports.encrypto = function(algorithm, padding, iv, key, data, cb){
	addExt(data, function(doc){
		try{	
			var cipherData = [];
			var cipher = crypto.createCipheriv(algorithm, key, iv);
			
			cipher.setAutoPadding(padding);
			cipherData.push(cipher.update(doc));
			cipherData.push(cipher.final());
			
			cb(null, Buffer.concat(cipherData));
		} catch(e) {
			cb(e);
		}
	})
}