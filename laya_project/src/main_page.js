
var myDirect = require('./myDirector');
var PacketCMD = require('../../common/packet_helper');
var lcc = require('./utils');

var MainPage = function(){
    MainPage.super(this);
    var that = this;
    var ViewManager = require('./viewManager');
    var SocketClient = myDirect.getSocketClient();
    MainPage.prototype.initlize = function(){


        SocketClient.regist_callback('logined',)

        var self_pub = myDirect.get_pubkey();
        if(!self_pub){
            var user_key = lcc.genNewUserInfo();
            console.log(user_key)
            myDirect.save_key(user_key.public,user_key.private);
            this.my_contract_list.visible = false;
        }

        var self_token = myDirect.get_token();
        if(!self_token){
            //this.check_my_public.visible = false;
            this.my_contract_list.visible = false;
        }
        else{
            if(!myDirect.islogin){
                var packet = PacketCMD.login_with_token(self_token);
                SocketClient.send(packet);
            }
        }

        SocketClient.regist_callback('logined',function(data){
            if(data.retcode == 0){
                myDirect.save_token(data.user_token) ;
            }
        })

        
        //open public page
        this.check_my_public.on('click',null,function(){

            var pubkey = myDirect.get_pubkey();
            ViewManager.show_public_page(pubkey);
        })

        //open contract
        this.create_contract_button.on('click',null,function(){
            if(!self_token){
                ViewManager.show_login_view();
            }
            else{
                ViewManager.show_create_page();
            }
            
        })

        this.my_contract_list.on('click',null,function(){
            ViewManager.show_contract_list();
        })

        this.change_langurage.on('click',null,function(){
            if(ViewManager.current_langurage == 'ENG'){
                that.change_langurage.text = 'ENG';
                ViewManager.set_langurage('CHN')

            }
            else{
                that.change_langurage.text = '中文';
                ViewManager.set_langurage('ENG');
                
            }
            
        })
    }


    MainPage.prototype.recv_logined = function(data){
        if(data.retcode == 0){
            myDirect.save_token(data.token);
            myDirect.user_nickname = data.user_nickname;
            myDirect.reputation = data.reputation;
        }
    }

    this.initlize();
}


module.exports = MainPage;