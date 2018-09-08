

var MainPage = function(){
    MainPage.super(this);
    var that = this;
    var ViewManager = require('./viewManager');
    MainPage.prototype.initlize = function(){
        
        //open public page
        this.check_my_public.on('click',null,function(){
            ViewManager.show_public_page();
        })

        //open contract
        this.create_contract_button.on('click',null,function(){
            ViewManager.show_login_view();
        })

        this.change_langurage.on('click',null,function(){
            if(ViewManager.current_langurage == 'ENG'){
                that.change_langurage.text = '中文';
                ViewManager.set_langurage('CHN')

            }
            else{
                ViewManager.set_langurage('ENG');
                that.change_langurage.text = 'ENG';
            }
            
        })
    }

    this.initlize();
}


module.exports = MainPage;