var PacketHelper = {};


/**
 * 生成公民
 * @param {String} user_nickname 
 */
PacketHelper.generate_create_user = function(user_nickname,user_pubkey){
    var packet = {};
    packet.cmd = 'user_nickname';
    packet.data = {};
    packet.data.user_nickname = user_nickname;
    packet.data.user_pubkey = user_pubkey;
    return packet;
}

PacketHelper.login_with_token = function(user_token){
    var packet = {};
    packet.cmd = 'user_login_with_token';
    packet.data = {};
    packet.data.user_token = user_token;
    return packet;
}

/**
 * 
 * @param {*} bSuc 成功与否
 * @param {*} user_token 用户token
 */
PacketHelper.on_logined = function(bSuc, user_token,user_nickname, reputation){
    var packet = {};
    packet.cmd = 'logined';
    packet.data = {};
    if(bSuc == false){
        packet.data.retcode = 1;
        packet.data.msg = '登录失败'
    }
    else{
        packet.data.retcode = 0;
        packet.data.user_token = user_token;
		packet.data.user_nickname = user_nickname;
		packet.data.reputation = reputation;
    }

    return packet;
}


/**
 * 生成合同
 * @param {*} contract_target_userid 合同对象
 * @param {*} contract_title 合同题目
 * @param {*} contract_content 合同内容
 */
PacketHelper.generate_create_contract = function(contract_target_userid, contract_title,contract_content){
    var packet = {};
    packet.cmd = 'create_contract';
    packet.data = {};
    packet.data.contract_target_userid = contract_target_userid;
    packet.data.contract_title = contract_title;
    packet.data.contract_content = contract_content;
    return packet;
}


/**
 * 请求和我有关系的合约列表
 */
PacketHelper.query_contract_list = function(){
    var packet = {};
    packet.cmd = 'query_contract_list';
    packet.data = {};
    return packet;

}

/**
 * 返回合约列表
 * @param {*} arry 
 */
PacketHelper.return_contract_list = function(arry){
    var packet = {};
    packet.cmd = 'contract_list_result';
    packet.data = {};
    packet.data.contract_list = arry;
    return packet;
}

/**
 * 创建合同结果
 * @param {*} bsuc 
 * @param {*} errormsg 
 */
PacketHelper.create_contract_result = function(bsuc,errormsg){
    var packet = {};1
    packet.cmd = 'create_contract_result';
    packet.data = {};
    if(bsuc == true){
        packet.data.retcode = 0;
    }
    else{
        packet.data.retcode = 1;
        packet.data.msg = errormsg;
    }

    return packet;
}


/**
 * 确认合约
 * @param {*} contract_id 合同ID
 * @param {*} self_sign 自己的公钥签名
 */
PacketHelper.confirm_contract = function(contract_id,self_sign){
    var packet = {};
    packet.cmd = 'confirm_contract';
    packet.data = {};
    packet.data.contract_id = contract_id;
    packet.data.self_sign = self_sign;

    return packet;
}


/**
 * 确认合约通知
 * @param {*} contract_id 
 */
PacketHelper.confirm_result = function(bsuc, contract_id, errormsg){
    var packet = {}
    packet.cmd = 'contract_confirmed';
    packet.data = {};
	
	if(bsuc == true){
		packet.data.retcode = 0;
		packet.data.contract_id = contract_id;
    }
    else{
        packet.data.retcode = 1;
        packet.data.msg = errormsg;
    }
    return packet;
}

/**
 * 完成合同
 * @param {*} contract_id 合同ID
 * @param {*} self_sign 自己的公钥签名
 */
PacketHelper.finish_contract = function(contract_id, self_sign){
    var packet = {};
    packet.cmd = 'finish_contract';
    packet.data = {};
    packet.data.contract_id = contract_id;
    packet.data.self_sign = self_sign;
	
    return packet;
}


/**
 * 完成合同回执
 * @param {*} contract_id 合同ID
 */
PacketHelper.return_finish_contract = function(bsuc, contract_id, label, errormsg){
    var packet = {};
    packet.cmd = 'return_finish_contract';
	packet.data = {};
	
	if(bsuc == true){
		packet.data.retcode = 0;
		packet.data.contract_id = contract_id;
		packet.data.label = label;
    }
    else{
        packet.data.retcode = 1;
        packet.data.msg = errormsg;
	}
	
    return packet;
}

module.exports = PacketHelper;