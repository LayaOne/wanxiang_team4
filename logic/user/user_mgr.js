/**
 * Module dependencies.
 */
const user = require("./user");

module.exports = (function(){
	return new user_mgr();
})();

function user_mgr(){
	this.maps = {};
}

user_mgr.prototype.add_one = function(nickname, pubkey, token){
	var u = new user();

	u.nickname = nickname;
	u.pubkey = pubkey;
	u.token = token;

	this.maps[u.pubkey] = u;
}

user_mgr.prototype.del_one = function(pubkey){
	delete this.maps[pubkey];
}