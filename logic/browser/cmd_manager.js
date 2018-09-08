/**
 * Module dependencies.
 */
const mlogger = require("../../utils/mlogger");
const ms_session_model = require('../../db/mongodb/ms_session.js');
const randomstring = require('randomstring');
const user_mgr = require("../user/user_mgr");
const contract_mgr = require("../contract/contract_mgr");
const packet_helper = require("../../common/packet_helper");

function CMD_LOGIN_WITH_TOKEN(packet, browser){

}

function CMD_USER_NICKNAME(packet, browser){
	let token = randomstring.generate(32);

	user_mgr.add_one(packet.data.user_nickname, packet.data.user_pubkey, token);
	
	browser.set_pubkey(packet.data.user_pubkey);
	browser.send_msg(packet_helper.on_logined(true, token));
}

function CMD_CREATE_CONTRACT(packet, browser){
	var creator_pubkey = browser.get_pubkey();
	var data = packet.data;

	//是否验证target_userid

	contract_mgr.add_one(creator_pubkey,
						data.contract_target_userid,
						data.contract_title,
						data.contract_content);
}

function CMD_QUERY_CONTRACT_LIST(packet, browser){
	var creator_pubkey = browser.get_pubkey();
	
}

exports.CMDFactory = (function(){
	return {
		create: function(packet, browser){
			packet = JSON.parse(packet);
			
			switch(packet.cmd){
				case "user_nickname":
					CMD_USER_NICKNAME(packet, browser);
					break;
				case "user_login_with_token":
					CMD_LOGIN_WITH_TOKEN(packet, browser);
					break;
				case "create_contract":
					CMD_CREATE_CONTRACT(packet, browser);
					break;
				case "query_contract_list":
					CMD_QUERY_CONTRACT_LIST(packet, browser);
					break;
				default:
					return;
			}
		}
	}
})();