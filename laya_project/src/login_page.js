
var PacketCMD = require('../../common/packet_helper');
var lcc = require('./utils');
var myDirector = require('./myDirector');

var LoginPage = function(){
    LoginPage.super(this);
    var that = this;

    var ViewManager = require('./viewManager');
    LoginPage.prototype.intilize = function(){
        this.do_login_butotn.on('click',null,function(){
            var user_nickName = that.name_input.text;
            if(user_nickName.length == 0){
                that.set_wrong_text('please insert your nickname');
                return;
            }

            var user_key = lcc.genNewUserInfo();
            console.log(user_key)
            myDirector.save_key(user_key.public,user_key.private);


            var login_packet = PacketCMD.generate_create_user(user_nickName,user_key.public);
            console.log(login_packet);

            myDirector.getSocketClient().send(login_packet);



        })
    }

    LoginPage.prototype.set_wrong_text = function(str){
        that.wrong_label_tip.text = str;
    }

    this.intilize();
}

module.exports = LoginPage;