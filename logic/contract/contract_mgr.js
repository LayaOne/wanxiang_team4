/**
 * Module dependencies.
 */
const contract = require("./contract");

module.exports = (function(){
	return new contract_mgr();
})();

function contract_mgr(){
	this.maps = {};
}

contract_mgr.prototype.add_one = function(creator_pubkey, target_pubkey, title, content){
	var c = new contract();
	
	c.creator_pubkey = creator_pubkey;
	c.target_pubkey = target_pubkey;
	c.title = title;
	c.content = content;
	
	this.maps[u.pubkey] = u;
}

contract_mgr.prototype.del_one = function(pubkey){
	delete this.maps[pubkey];
}