/**n
 * Module dependencies.
 */
const mlogger = require("../../utils/mlogger");
const ms_human_model = require("../../db/mongodb/ms_human");
const ms_contract_model = require("../../db/mongodb/ms_contract");
const randomstring = require('randomstring');
const user_mgr = require("../user/user_mgr");
const contract_mgr = require("../contract/contract_mgr");
const packet_helper = require("../../common/packet_helper");
const wancloud_api = require("../wancloud/api");
const time_op = require("../../utils/time_op");

function CMD_USER_NICKNAME(packet, browser){
	let token = randomstring.generate(32);
	let data = packet.data;
	//user_mgr.add_one(packet.data.user_nickname, packet.data.user_pubkey, token);
	
	ms_human_model.insert(data.user_pubkey, {
		nickname: data.user_nickname,
		token: token,
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
			"title": contract_title,
			"party_a": creator_pubkey,
			"party_b": data.contract_target_userid,
			"party_b_agree": false,
			"party_a_finish": false,
			"party_b_finish": false,
			"create_ts": time_op.now(),
			"agree_ts": -1,
			"finish_ts": -1
		}, function(err, res){
			if(err || res.body.code != 200){
				browser.send_msg(packet_helper.create_contract_result(false, res.body.status));
				return;
			}
			
			let raw_data_hash = res.body.rawDataHash;
			
			ms_contract_model.insert(raw_data_hash, {
				party_a: creator_pubkey,
				party_a: data.contract_target_userid
			}, function(err, product, numAffected){
				if(!!err){
					browser.send_msg(packet_helper.create_contract_result(false, err.toString()));
				}else{
					browser.send_msg(packet_helper.create_contract_result(true));
				}
			});
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
	var my_pubkey = browser.get_pubkey();
	
	if(!my_pubkey){
		return;
	}
	
	ms_contract_model.find_many({$or: [{party_a: my_pubkey}, {party_b: my_pubkey}]}, async function(docs){
		let ret = [];

		for(let i = 0;i < docs.length;++i){
			try{
				ret.push(await wancloud_api.get(docs[i].contract_hash));
			}catch(err){
				console.log("CMD_QUERY_CONTRACT_LIST err:", err);
			}
		}
		
		browser.send_msg(packet_helper.return_contract_list(ret));
	});
}

/**
 * 乙方确认合同
 * @param {*} packet 
 * @param {*} browser 
 */
function CMD_CONFIRM_CONTRACT(packet, browser){
	var my_pubkey = browser.get_pubkey();
	
	if(!my_pubkey){
		return;
	}
	
	//verify signature by party_b
	
	ms_contract_model.find_one({"contract_hash": packet.data.contract_id}, async function(doc){
		if(!doc || doc.party_b != my_pubkey){
			return;
		}
		
		let body = await wancloud_api.get(packet.data.contract_id);
		
		body.label.party_b_agree = true;
		body.label.agree_ts = time_op.now();
		
		wancloud_api.set(body.rawData, body.label, function(err, res){
			if(err || res.body.code != 200){
				browser.send_msg(packet_helper.confirm_result(false, null, res.body.status));
				return;
			}
			
			browser.send_msg(packet_helper.confirm_result(true, packet.data.contract_id));
		});
	});
}

/**
 * 双方完成合同
 * @param {*} packet
 * @param {*} browser
 */
function CMD_FINISH_CONTRACT(packet, browser){
	var my_pubkey = browser.get_pubkey();
	
	if(!my_pubkey){
		return;
	}
	
	//verify signature

	ms_contract_model.find_one({"contract_hash": packet.data.contract_id}, async function(doc){
		if(!doc || doc.party_a != my_pubkey || doc.party_b != my_pubkey){
			return;
		}

		try{
			let body = await wancloud_api.get(packet.data.contract_id);
		
			if(!body.label.party_b_agree){
				return;
			}
			
			switch(my_pubkey){
				case body.label.party_a:
					body.label.party_a_finish = true;
					break;
				case body.label.party_b:
					body.label.party_b_finish = true;
					break;
				default:
					return;
			}

			if(body.label.party_a_finish && body.label.party_b_finish){
				body.label.finish_ts = time_op.now();
			}

			wancloud_api.set(body.rawData, body.label, function(err, res){
				if(err || res.body.code != 200){
					browser.send_msg(packet_helper.return_finish_contract(false, null, null, res.body.status));
					return;
				}
				
				browser.send_msg(packet_helper.return_finish_contract(true, packet.data.contract_id, body.label));
			});
		}catch(err){
			browser.send_msg(packet_helper.return_finish_contract(false, null, null, err.toString()));
		}
	});
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
				case "confirm_contract": 
					CMD_CONFIRM_CONTRACT(packet, browser);
					break;
				case "finish_contract":
					CMD_FINISH_CONTRACT(packet, browser);
					break;
				default:
					return;
			}
		}
	}
})();