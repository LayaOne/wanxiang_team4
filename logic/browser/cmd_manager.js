/**n
 * Module dependencies.
 */
const mlogger = require("../../utils/mlogger");
const ms_human_model = require("../../db/mongodb/ms_human");
const randomstring = require('randomstring');
const user_mgr = require("../user/user_mgr");
const contract_mgr = require("../contract/contract_mgr");
const packet_helper = require("../../common/packet_helper");
const wancloud_api = require("../wancloud/api");
const time_op = require("../../utils/time_op");

function CMD_LOGIN_WITH_TOKEN(packet, browser){
	let token = packet.data.user_token;

	ms_human_model.find_one({token}, function(doc){
		if(!doc){
			browser.send_msg(packet_helper.on_logined(false));
			return;
		}

		let new_token = randomstring.generate(32);

		ms_human_model.update({'pubkey': doc["pubkey"]}, {'token': new_token, 'login_ts': time_op.now()}, function(err, raw){
			if(!!err){
				browser.send_msg(packet_helper.on_logined(false));
			}else{
				browser.set_pubkey(new_token);
				browser.send_msg(packet_helper.on_logined(true, new_token, doc["nickname"]));
			}
		});
	});
}

function CMD_USER_NICKNAME(packet, browser){
	let token = randomstring.generate(32);
	let data = packet.data;
	//user_mgr.add_one(packet.data.user_nickname, packet.data.user_pubkey, token);
	
	ms_human_model.insert(data.user_pubkey, {
		nickname: data.user_nickname,
		token: token,
		contracts: [],
		login_ts: time_op.now()
	}, function(err, product, numAffected){
		if(!!err){
			browser.send_msg(packet_helper.on_logined(false));
		}else{
			browser.set_pubkey(data.user_pubkey);
			browser.send_msg(packet_helper.on_logined(true, token, data.user_nickname));
		}
	});
}

function CMD_CREATE_CONTRACT(packet, browser){
	let creator_pubkey = browser.get_pubkey();
	
	if(!creator_pubkey){
		return;
	}

	let data = packet.data;
	let keys = [creator_pubkey, data.contract_target_userid];
	
	//verify signature by creator_pubkey
	
	//verify target_userid and creator_pubkey
	ms_human_model.find_many({pubkey: {$in: keys}}, function(docs){
		if(docs.length != 2){
			return;
		}
		
		wancloud_api.set(data.contract_content, {
			"party_a": creator_pubkey,
			"party_b": data.contract_target_userid,
			"party_b_agree": false,
			"title": contract_title,
			"ts": time_op.now(),
			"last_update_ts": time_op.now()
		}, function(err, res){
			let body = res.body;
		});
		/*
		contract_mgr.add_one(creator_pubkey,
			data.contract_target_userid,
			data.contract_title,
			data.contract_content);
		*/
	});
}

function CMD_QUERY_CONTRACT_LIST(packet, browser){
	var creator_pubkey = browser.get_pubkey();
	
	ms_contract_model.find
	wancloud_api.
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