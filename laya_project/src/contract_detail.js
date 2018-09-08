var myDirector = require('./myDirector');
var PacketCMD = require('../../common/packet_helper');

var ContractDetailPage = function(contract_id){
    ContractDetailPage.super(this);
    var that = this;
    this.contract_id = contract_id;

    ContractDetailPage.prototype.initlize = function(){

        var single_contract_info = myDirector.get_single_contract(this.contract_id);
        console.log('单个Detail',single_contract_info);
        if(single_contract_info != undefined){
            this.contract_title.text = single_contract_info.label.title;
            this.contract_creator_fill.text =  single_contract_info.label.party_a.substring(0,15) + '...';
            this.contract_target_fill.text =  single_contract_info.label.party_b.substring(0,15) + '...';
            this.contract_content_fill.text = single_contract_info.label.data;

            if(single_contract_info.label.party_b_agree == "false"){
                console.log('bgree = false');
                if(single_contract_info.label.party_b == myDirector.get_pubkey()){
                    console.log('我是签署者',myDirector.get_pubkey());
                    this.confirm_contract.visible = true;
                }
                else{
                    console.log('创建者party_b',single_contract_info.label.party_b,myDirector.get_pubkey())
                }
            }
            else{
                console.log('该合约已经签署',single_contract_info.label.party_b_agree);
            }
        }

        this.confirm_contract.on('click',null,function(){
            var packet = PacketCMD.confirm_contract(that.contract_id);
            myDirector.getSocketClient().send(packet)
        })
        
        
    }

    this.initlize();
}

module.exports = ContractDetailPage;
