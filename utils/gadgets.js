const crypto = require("crypto");

var gadgets = {};

gadgets.encryptAsync = function(data, password) {
    return new Promise((resolve, reject) => {
        try {
            var cipher = crypto.createCipher('aes-256-cbc', password);
            var encrypted = Buffer.concat([cipher.update(new Buffer(JSON.stringify(data), "utf8")), cipher.final()]);
        } catch (exception) {
            reject({ message: exception.message });
		}
		
        resolve(encrypted);
    });
}

gadgets.decryptAsync = function(encrypt_data, password) {
    return new Promise((resolve, reject) => {
		try {
			var decipher = crypto.createDecipher("aes-256-cbc", password);
			var decrypted = Buffer.concat([decipher.update(encrypt_data), decipher.final()]);
			resolve(JSON.parse(decrypted.toString()));
		} catch (exception) {
			reject({ message: exception.message });
		}
    });
}

gadgets.create_uuid = function(n){
	return crypto.createHash('md5').update(UUID.v1()).digest('hex').substr(0, n);
}

module.exports = gadgets;
