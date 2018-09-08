
var PacketCMD = require('../../common/packet_helper');
var lcc = require('./utils');
var myDirector = require('./myDirector');

var LoginPage = function(){
    LoginPage.super(this);
    var that = this;

    var SocketClient = myDirector.getSocketClient();
    var ViewManager = require('./viewManager');


    LoginPage.prototype.intilize = function(){
        this.do_login_butotn.on('click',null,function(){
            var user_nickName = that.name_input.text;
            if(user_nickName.length == 0){
                that.set_wrong_text('please insert your nickname');
                return;
            }

            SocketClient.regist_callback('logined',that.recv_logined);

           
         
            var login_packet = PacketCMD.generate_create_user(user_nickName,myDirector.get_pubkey());
            console.log(login_packet);

            myDirector.getSocketClient().send(login_packet);

            ViewManager.show_loading(true);



        })
    }

    LoginPage.prototype.recv_logined = function(data){

        ViewManager.show_loading(false);
        if(data.retcode == 0){
            myDirector.save_token(data.user_token);
            myDirector.user_nickname = data.user_nickname;
            myDirector.reputation = data.reputation;

            ViewManager.show_create_page();
    
        }
    }

    LoginPage.prototype.set_wrong_text = function(str){
        that.wrong_label_tip.text = str;
    }

    this.intilize();
}

module.exports = LoginPage;