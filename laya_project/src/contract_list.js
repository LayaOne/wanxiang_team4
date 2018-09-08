
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
            that.my_contract_list_label.text = '请求列表中'
        }
        else{
            that.my_contract_list_label.text = 'Requesting';
        }        


        /*
        var dummy_data = [];
        for(var i=0; i < 5; i++){
            var single_dummy = {};
            single_dummy.title = '测试合同';
            single_dummy.party_b_agree = false;
            dummy_data.push(single_dummy);
        }
        */


        //that.render_contract_list(dummy_data)




        SocketClient.regist_callback('contract_list_result',that.recv_list);

        var packet = PacketCMD.query_contract_list();
        SocketClient.send(packet);

        console.log('开始请求合同列表')

        that.return_home_button.on('click',null,function(){
            viewManager.return_home();
        })


      

        
        
    }

    MyContract.prototype.render_contract_list = function(arry){
        var x, y;
        x = 0 ;
        y = 0;
        width = 456
        height = 100;
        for(var i=0; i< arry.length; ++i){
            var single_test_item = new laya.display.Sprite();
            single_test_item.width = width;
            single_test_item.height = height;
            single_test_item.graphics.drawRect(x,y,width,height,'#2b2b2b','#ffffff',1);
            single_test_item.x = x;
            single_test_item.y = (120*i);



            var single_contract = arry[i];
            console.log('单个合约信息',single_contract);
            single_test_item.contract_id = single_contract.rawDataHash;
            var contract_title = single_contract.label.title;
            var single_title_label = new Text();
            single_title_label.text = contract_title;
            single_title_label.fontSize = 20;
            single_title_label.color = '#FFFFFF';
            single_title_label.x = 20;
            single_title_label.y = 20;

            single_test_item.addChild(single_title_label);
            this.contract_container.addChild(single_test_item);

            single_test_item.on('click',null,on_click_single_contract);



        }
        
        

    }



    MyContract.prototype.recv_list = function(data){

        if(viewManager.current_langurage == 'CHN'){
            that.my_contract_list_label.text = '列表请求完成'
        }
        else{
            that.my_contract_list_label.text = 'Contract List';
        }     
        myDirector.save_contract(data.contract_list); 
        var contract_list = data.contract_list;
        that.render_contract_list(contract_list);

    }

    function on_click_single_contract(){
        var contract_id = this.contract_id;
        console.log('单个合同被点击',contract_id);
        viewManager.show_detail_ui(contract_id);
    }
    
    this.initlize();

    
}

module.exports = MyContract;