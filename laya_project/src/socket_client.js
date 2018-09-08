var Socket = Laya.Socket;
var Event = Laya.Event;


function WSClient(url,on_open){

    this.wsurl = url;
    this.bConnect = false;
    this.socket = new Socket();
    var socket = this.socket;
    this.callback_hash = {};
    this.on_open_callback = on_open;

    this.viewManager =  require('./viewManager');

    
    socket.connectByUrl(url);

    socket.on(Event.OPEN, this, this.onOpen);
    socket.on(Event.CLOSE, this, this.on_close);
    socket.on(Event.MESSAGE, this, this.onMessage);
    socket.on(Event.ERROR, this, this.on_error);
}




WSClient.prototype.regist_callback = function(cmd,handler){
    this.callback_hash[cmd] = handler;
}

/**
 * 注册额外的接收消息函数
 * @param {Function} handler 
 */
WSClient.prototype.regist_on_message_extand = function(handler){
    this.on_message_extand = handler;
}

WSClient.prototype.on_close = function(){
    var that = this;
    //this.viewManager.show_wifi_dialog();
    //that.sim_view.update_status_text('Socket Close 断开连接 2秒后重试')
    setTimeout(() => {
        // that.sim_view.update_status_text('尝试连接服务器...',that.wsurl)
        this.socket.connectByUrl(this.wsurl);
    }, 2000);
}

WSClient.prototype.onOpen = function(){
    console.log('connected');
    //this.viewManager.close_wifi_dialog();
    this.bConnect = true;
    if(this.on_open_callback != undefined){
        this.on_open_callback();
    }
}

WSClient.prototype.onMessage = function(data){
    var that = this;
    console.log('recv msg',data);
    if(this.on_message_extand != undefined){
        this.on_message_extand(data);
    }
    try{
        var packet = JSON.parse(data);
        if(!packet.cmd){
            //that.sim_view.update_status_text('格式错误');
            return;
        }
        else{
            if(that.callback_hash[packet.cmd] != undefined){
                that.callback_hash[packet.cmd](packet.data);
            }
            else{
                //that.sim_view.update_status_text('消息未处理',packet.cmd)
                console.log('消息未处理',packet.cmd)
            }
            
        }
    }catch(e){
        console.log('onMessage异常',e);
    }
}

WSClient.prototype.on_error = function(){
    this.bConnect = false;
    //this.viewManager.show_wifi_dialog();
    //this.sim_view.update_status_text('断开连接');
}

/**
 * 发送网络数据
 * @param {Object} data 
 */
WSClient.prototype.send = function(data){
    console.log('发送数据',data);
    if(this.bConnect){
        this.socket.send(JSON.stringify(data));
    }    
}

WSClient.prototype.is_connect = function(){
    return this.bConnect;
}





module.exports = WSClient;