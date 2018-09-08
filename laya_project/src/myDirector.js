var myDirector = {};


myDirector.setSocketClient = function(socket_client){
    myDirector.SocketClient = socket_client;
}

myDirector.getSocketClient = function(){
    return myDirector.SocketClient
}

myDirector.save_key = function(pub,private){
    localStorage.setItem('user_pub',pub);
    localStorage.setItem('user_private',private);
}

myDirector.get_pubkey = function(){
    return localStorage.getItem('user_pub');
}

myDirector.save_token = function(token){
    localStorage.setItem('token',token);
    myDirector.islogin = true;
}

myDirector.get_token = function(){
    return localStorage.getItem('token');
}

myDirector.save_contract = function(contract_list){
    myDirector.contract_list = contract_list;
}


myDirector.get_single_contract = function(contract_id){
    for(var i=0; i < myDirector.contract_list.length; ++i){
        var single_contract = myDirector.contract_list[i];
        if(single_contract.rawDataHash == contract_id){
            return single_contract;
        }
    }

    return undefined;
}




module.exports = myDirector;