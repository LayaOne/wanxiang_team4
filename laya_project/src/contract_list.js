
var myDirector = require('./myDirector');
var PacketCMD = require('../../common/packet_helper');

var MyContract = function(){
    MyContract.super(this);
    var viewManager = require('./viewManager');
    var that = this;
    var SocketClient = myDirector.getSocketClient();
    MyContract.prototype.initlize = function(){

        if(viewManager.current_langurage == 'CHN'){
            that.my_contract_list_label = '请求列表中'
        }
        else{
            that.my_contract_list_label = 'Requesting';
        }        


        //初始化panel
        this.textPanel = new Panel();
        this.textPanel.pos(0,Laya.stage.height * 0.10);
        this.textPanel.width = Laya.stage.width;
        this.textPanel.height = Laya.stage.height * 0.65;
        this.textPanel.vScrollBarSkin = "";
        this.textPanel.vScrollBar.elasticDistance = 300;


        var single_test_item = new laya.display.Sprite();
        
        



        SocketClient.regist_callback('contract_list_result',that.recv_list);

        var packet = PacketCMD.query_contract_list();
        SocketClient.send(packet);

        
        
    }

    MyContract.prototype.recv_list = function(data){
        var contract_list = data.contract_list;


    }


    this.initlize();

    
}

module.exports = MyContract;