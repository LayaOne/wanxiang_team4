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

module.exports = myDirector;