var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var loginUI=(function(_super){
		function loginUI(){
			
		    this.welcome_cityzen=null;
		    this.input_tips=null;
		    this.your_name=null;
		    this.name_input=null;
		    this.do_login_butotn=null;
		    this.wrong_label_tip=null;

			loginUI.__super.call(this);
		}

		CLASS$(loginUI,'ui.loginUI',_super);
		var __proto__=loginUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(loginUI.uiView);

		}

		loginUI.uiView={"type":"View","props":{"width":640,"height":1136},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":640,"lineWidth":1,"height":1136,"fillColor":"#2b2b2b"}},{"type":"Text","props":{"y":134,"x":69,"width":370,"var":"welcome_cityzen","text":"欢迎你，万向城公民","name":"welcome_cityzen","height":57,"fontSize":40,"color":"#ffffff"}},{"type":"Text","props":{"y":243,"x":-3,"width":640,"var":"input_tips","text":"请输入您的公民信息","name":"input_tips","height":57,"fontSize":35,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":430,"x":-98,"width":511,"var":"your_name","text":"您的尊姓大名","name":"your_name","height":57,"fontSize":30,"color":"#ffffff","align":"center"}},{"type":"TextInput","props":{"y":496,"x":61,"width":542,"var":"name_input","skin":"comp/button_skin.png","sizeGrid":"12,13,12,11","prompt":"Your Name","name":"name_input","height":91,"fontSize":30,"font":"Microsoft YaHei","color":"#ffffff"}},{"type":"Button","props":{"y":735,"x":144,"width":391,"var":"do_login_butotn","stateNum":1,"skin":"comp/button_skin.png","sizeGrid":"10,10,8,7","name":"do_login_butotn","labelStroke":0,"labelSize":40,"labelFont":"Microsoft YaHei","labelColors":"#FFFFFF","labelBold":false,"labelAlign":"center","label":"继续","height":99}},{"type":"Text","props":{"y":617,"x":0,"width":640,"var":"wrong_label_tip","name":"wrong_label_tip","height":39,"fontSize":35,"font":"Microsoft YaHei","color":"#f33733","align":"center"}}]};
		return loginUI;
	})(View);
var mainUI=(function(_super){
		function mainUI(){
			
		    this.wanxiang_city_logotext=null;
		    this.create_contract_button=null;
		    this.change_langurage=null;
		    this.my_contract_list=null;
		    this.check_my_public=null;

			mainUI.__super.call(this);
		}

		CLASS$(mainUI,'ui.mainUI',_super);
		var __proto__=mainUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(mainUI.uiView);

		}

		mainUI.uiView={"type":"View","props":{"width":640,"height":1136},"child":[{"type":"Sprite","props":{"y":0,"x":0,"width":640,"height":1136},"child":[{"type":"Rect","props":{"width":640,"lineWidth":1,"height":1136,"fillColor":"#2b2b2b"}}]},{"type":"Image","props":{"y":139,"width":272,"skin":"comp/wanxiang_logo.png","height":82,"centerX":-128}},{"type":"Text","props":{"y":158,"x":391,"width":243,"var":"wanxiang_city_logotext","text":"万向创新聚能城","name":"wanxiang_city_logotext","height":63,"fontSize":28,"font":"Microsoft YaHei","color":"#ffffff"}},{"type":"Text","props":{"y":362,"x":4,"width":640,"text":"商业合同生成器","height":75,"fontSize":50,"color":"#ffffff","align":"center"}},{"type":"Button","props":{"y":611,"x":133,"width":391,"var":"create_contract_button","stateNum":1,"skin":"comp/button_skin.png","sizeGrid":"10,10,8,7","name":"create_contract_button","labelStroke":0,"labelSize":40,"labelFont":"Microsoft YaHei","labelColors":"#FFFFFF","labelBold":false,"labelAlign":"center","label":"创建合同","height":99}},{"type":"Text","props":{"y":461,"x":5,"width":640,"text":"Business Contract Generator","height":75,"fontSize":40,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":52,"x":500,"width":103,"var":"change_langurage","text":"ENG","height":56,"fontSize":30,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}},{"type":"Button","props":{"y":741,"x":135,"width":391,"var":"my_contract_list","stateNum":1,"skin":"comp/button_skin.png","sizeGrid":"10,10,8,7","name":"my_contract_list","labelStroke":0,"labelSize":40,"labelFont":"Microsoft YaHei","labelColors":"#FFFFFF","labelBold":false,"labelAlign":"center","label":"查看我的合同","height":99}},{"type":"Button","props":{"y":871,"x":133,"width":391,"var":"check_my_public","stateNum":1,"skin":"comp/button_skin.png","sizeGrid":"10,10,8,7","name":"check_my_public","labelStroke":0,"labelSize":40,"labelFont":"Microsoft YaHei","labelColors":"#FFFFFF","labelBold":false,"labelAlign":"center","label":"查看我的公钥","height":99}}]};
		return mainUI;
	})(View);
var my_publicUI=(function(_super){
		function my_publicUI(){
			
		    this.public_label=null;
		    this.close_button=null;

			my_publicUI.__super.call(this);
		}

		CLASS$(my_publicUI,'ui.my_publicUI',_super);
		var __proto__=my_publicUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(my_publicUI.uiView);

		}

		my_publicUI.uiView={"type":"Dialog","props":{"width":640,"popupCenter":true,"height":1136},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":640,"lineWidth":1,"height":1136,"fillColor":"#2b2b2b"}},{"type":"Text","props":{"y":181,"x":3,"width":640,"text":"您的公钥","height":93,"fontSize":40,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":459,"x":7,"width":640,"var":"public_label","text":"0x00000","height":93,"fontSize":35,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}},{"type":"Image","props":{"y":50,"x":588,"var":"close_button","skin":"comp/close_button.png","name":"close_button"}}]};
		return my_publicUI;
	})(Dialog);