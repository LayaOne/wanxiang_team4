/**
 * Module dependencies.
 */
const mlogger = require("../../utils/mlogger");
const ms_session_model = require('../../db/mongodb/ms_session.js');
const randomstring = require('randomstring');
const user_mgr = require("../user/user_mgr");
const packet_helper = require("../../common/packet_helper");

function CMD_LOGIN_WITH_TOKEN(packet, browser){

}

function CMD_USER_NICKNAME(packet, browser){
	let token = randomstring.generate(32);
	
	user_mgr.add_one(packet.data.user_nickname, packet.data.user_pubkey, token);
	browser.send_msg(packet_helper.on_logined(true, token));
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
				default:
					return;
			}
		}
	}
})();