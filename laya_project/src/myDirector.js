var myDirector = {};

myDirector.setSocketClient = function(socket_client){
    myDirector.SocketClient = socket_client;
}

myDirector.getSocketClient = function(){
    return myDirector.SocketClient
}

module.exports = myDirector;