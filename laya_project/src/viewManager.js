var ViewManager = {};

var MainPage = require('./main_page');
var LoginPage = require('./login_page');
var ContractListPage = require('./contract_list');
var CreatePage = require('./create_page');

var SocketClient = require('./socket_client');
var myDirector = require('./myDirector');
var Local = require('./local');
var resArry = [
    {url:'res/atlas/comp.atlas',type:Laya.Loader.ATLAS}
]


ViewManager.current_langurage = 'ENG';

ViewManager.show_create_page = function(){
    var create_page = new CreatePage();
    ViewManager.jump_to_view(create_page);
}

ViewManager.set_langurage = function(lan){
    ViewManager.current_langurage = lan;
    ViewManager.localize_element(ViewManager.current_view);
}

ViewManager.initlize = function(){

    var socket_instance = new SocketClient("ws://www.ncsip.cn:443",function(){
        
    });
    myDirector.setSocketClient(socket_instance);



    Laya.class(MainPage,"MainPage",mainUI);
    Laya.class(LoginPage,"LoginPage",loginUI);
    Laya.class(ContractListPage,"ContractListPage",contract_listUI);
    Laya.class(CreatePage,"CreatePage",createUI);
    
    

    
    ViewManager.ROOTNODE = new laya.display.Sprite();
    Laya.stage.addChild(ViewManager.ROOTNODE);
	Laya.loader.load(resArry ,Laya.Handler.create(null,function(){
        
        
        var mainPage = new MainPage();
        ViewManager.jump_to_view(mainPage);
        
        /*
        var test_page = new ContractListPage();
        ViewManager.jump_to_view(test_page);
        */

	}))
}

ViewManager.show_login_view = function(){
    var login_view = new LoginPage();
    ViewManager.jump_to_view(login_view);
}

ViewManager.localize_element = function(element){
    var total_add_number = element.numChildren;
    
    for(var i=0;  i< total_add_number; i++){
        var single_element = element.getChildAt(i);
        //console.log(single_element.name);
        var single_local_info = Local[ViewManager.current_langurage][single_element.name];
        if(single_local_info != undefined){
            if(single_local_info.type == 'label'){
                single_element.text = single_local_info.text;
            }
            else if(single_local_info.type == 'button'){
                single_element.label = single_local_info.text;
            }
        }
    }
}

ViewManager.return_home = function(){
    var main_page = new MainPage();
    ViewManager.jump_to_view(main_page);
}

ViewManager.show_contract_list = function(){
    var list_page = new ContractListPage();
    ViewManager.jump_to_view(list_page);
}

ViewManager.jump_to_view = function(view){

    ViewManager.localize_element(view);


    ViewManager.ROOTNODE.addChild(view);
    if(ViewManager.current_view != undefined){
        ViewManager.current_view.removeSelf();
    }
    ViewManager.current_view = view;
}

ViewManager.show_public_page = function(public_key){
    if(ViewManager.pub_page == undefined){
        
        ViewManager.pub_page = new my_publicUI();
        ViewManager.pub_page.public_label.text = public_key;
        ViewManager.pub_page.close_button.on('click',null,function(){
            ViewManager.pub_page.close();
        })
    }
    
    ViewManager.pub_page.popup();

}


ViewManager.show_loading = function(show){
    if(show){
        if(ViewManager.loading_dialog == undefined){
            ViewManager.loading_dialog = new LoadingUI();
        }
        ViewManager.loading_dialog.popup();
    }
    else{
        ViewManager.loading_dialog.close();
    }
}

module.exports = ViewManager;