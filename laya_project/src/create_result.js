
var PacketCMD = require('../../common/packet_helper');
var myDirector = require('./myDirector');


var CreateResultPage = function(){

    
    CreateResultPage.super(this);
    var that = this;
    var SocketClient = myDirector.getSocketClient();
    var ViewManager = require('./viewManager');
    CreateResultPage.prototype.initlize = function(){
        
        SocketClient.regist_callback('create_contract_result',that.recv_create_result);

        this.jump_my_contract_list.on('click',null,function(){
            ViewManager.return_home();
        })
    }

    CreateResultPage.prototype.recv_create_result = function(data){
        if(data.retcode == 0){
            if(ViewManager.current_langurage =='CHN'){
                that.create_finish_status.text = '创建成功'
            }
            else{
                that.create_finish_status.text = 'Created Contract';
            }
            
            that.suc_logo.visible = true;
            that.jump_my_contract_list.visible = true;
        }
        else{
            that.create_finish_status = data.msg;
        }
    }

    this.initlize();

}

module.exports = CreateResultPage;