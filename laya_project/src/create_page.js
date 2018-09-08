var PacketCMD = require('../../common/packet_helper');
var myDirector = require('./myDirector');

var CreatePage = function(){
    
    CreatePage.super(this);
    var that = this;
    var SocketClient = myDirector.getSocketClient();
    var viewManager = require('./viewManager')
    CreatePage.prototype.initlize = function(){

        //创建合同
        this.do_create_button.on('click',null,function(){

          

            var target_public_key = that.target_pubkey_input.text;

            var contract_title = that.contract_title_input.text;

            var contract_content = that.contract_content_input.text;

            if(!target_public_key || !contract_title || !contract_content){
                that.set_wrong_tip('please complete fill the blank');
                return;
            }

            viewManager.show_create_result();

            //todo 校验pubkey

            var create_packet = PacketCMD.generate_create_contract(target_public_key,contract_title,contract_content);
            SocketClient.send(create_packet);

           

        })
    }


    CreatePage.prototype.set_wrong_tip = function(str){
        that.create_wrong_tip.text = str;
    }

    this.initlize();
}

module.exports = CreatePage;