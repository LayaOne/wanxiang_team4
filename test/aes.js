// const { encrypto } = require('../crypto/encrypto.js');
// const { decrypt } = require("../crypto/decrypto.js");
const gadgets = require("../utils/gadgets");
const password = "caonimade";

(async function(){
	try{
		var ret = await gadgets.encryptAsync("pengchuanshigou", password);
		console.log(ret);
		var data = await gadgets.decryptAsync(ret, password);
		console.log(data);
	}catch(err){
		console.log(err);
	}
})();