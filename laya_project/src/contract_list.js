
var myDirector = require('./myDirector');
var PacketCMD = require('../../common/packet_helper');
var Panel = Laya.Panel;
var Text = Laya.Text;

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

        var dummy_data = [];
        for(var i=0; i < 5; i++){
            var single_dummy = {};
            single_dummy.title = '测试合同';
            single_dummy.party_b_agree = false;
            dummy_data.push(single_dummy);
        }

        that.render_contract_list(dummy_data)


        that.return_home_button.on('click',null,function(){
            viewManager.return_home();
        })


        //SocketClient.regist_callback('contract_list_result',that.recv_list);

        //var packet = PacketCMD.query_contract_list();
        //SocketClient.send(packet);

        
        
    }

    MyContract.prototype.render_contract_list = function(arry){
        var x, y;
        x = 0 ;
        y = 0;
        width = 456
        height = 100;
        for(var i=0; i< arry.length; ++i){
            var single_test_item = new laya.display.Sprite();
            single_test_item.graphics.drawRect(x,y+(120*i),width,height,'#2b2b2b','#ffffff',1);
            

            var single_contract = arry[i];
            var contract_title = single_contract.title;
            var single_title_label = new Text();
            single_title_label.text = contract_title;
            single_title_label.fontSize = 20;
            single_title_label.color = '#FFFFFF';
            single_title_label.x = 20;
            single_title_label.y = 20+(120*i);

            single_test_item.addChild(single_title_label);
            this.contract_container.addChild(single_test_item);



            
            

        }
        
        

    }

    MyContract.prototype.recv_list = function(data){
        var contract_list = data.contract_list;


    }


    this.initlize();

    
}

module.exports = MyContract;