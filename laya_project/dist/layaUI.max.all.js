var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var LoadingUI=(function(_super){
		function LoadingUI(){
			

			LoadingUI.__super.call(this);
		}

		CLASS$(LoadingUI,'ui.LoadingUI',_super);
		var __proto__=LoadingUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(LoadingUI.uiView);

		}

		LoadingUI.uiView={"type":"Dialog","props":{"width":640,"height":1136},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":640,"lineWidth":1,"height":1136,"fillColor":"#626262"}},{"type":"Text","props":{"y":532,"x":0,"width":640,"text":"Loading..","height":66,"fontSize":50,"font":"Microsoft YaHei","color":"#9bee09","align":"center"}}]};
		return LoadingUI;
	})(Dialog);
var contract_detailUI=(function(_super){
		function contract_detailUI(){
			
		    this.contract_title=null;
		    this.contract_creator_label=null;
		    this.contract_target_label=null;
		    this.contract_creator_fill=null;
		    this.contract_target_fill=null;
		    this.contract_content_label=null;

			contract_detailUI.__super.call(this);
		}

		CLASS$(contract_detailUI,'ui.contract_detailUI',_super);
		var __proto__=contract_detailUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(contract_detailUI.uiView);

		}

		contract_detailUI.uiView={"type":"View","props":{"width":640,"name":"contract_detail","height":1136},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":640,"lineWidth":1,"height":1136,"fillColor":"#2b2b2b"}},{"type":"Text","props":{"y":60,"x":3,"width":640,"var":"contract_title","text":"Loading...","name":"contract_title","height":93,"fontSize":40,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":221,"x":-150,"width":511,"var":"contract_creator_label","text":"合同创建者","name":"contract_creator_label","height":57,"fontSize":30,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":379,"x":-150,"width":511,"var":"contract_target_label","text":"合同签署人","name":"contract_target_label","height":57,"fontSize":30,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":291,"x":0,"width":640,"var":"contract_creator_fill","text":"Loading..","name":"contract_creator_fill","height":57,"fontSize":30,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":431,"x":2,"width":640,"var":"contract_target_fill","text":"Loading..","name":"contract_target_fill","height":57,"fontSize":30,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":533,"x":-157,"width":511,"var":"contract_content_label","text":"合同详情","name":"contract_content_label","height":57,"fontSize":30,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":629,"x":38,"wordWrap":true,"width":541,"text":"Loading...","overflow":"scroll","height":373,"fontSize":30,"font":"Microsoft YaHei","align":"left"}}]};
		return contract_detailUI;
	})(View);
var contract_listUI=(function(_super){
		function contract_listUI(){
			
		    this.my_contract_list_label=null;
		    this.return_home_button=null;
		    this.contract_container=null;

			contract_listUI.__super.call(this);
		}

		CLASS$(contract_listUI,'ui.contract_listUI',_super);
		var __proto__=contract_listUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(contract_listUI.uiView);

		}

		contract_listUI.uiView={"type":"View","props":{"width":640,"height":1136},"child":[{"type":"Sprite","props":{"y":0,"x":0,"width":640,"height":1136},"child":[{"type":"Rect","props":{"width":640,"lineWidth":1,"height":1136,"fillColor":"#2b2b2b"}}]},{"type":"Text","props":{"y":33,"x":-4,"width":640,"var":"my_contract_list_label","text":"我的合同列表","name":"my_contract_list_label","height":57,"fontSize":40,"color":"#f8f8f8","align":"center"}},{"type":"Button","props":{"y":948,"x":122,"width":391,"visible":true,"var":"return_home_button","stateNum":1,"skin":"comp/button_skin.png","sizeGrid":"10,10,8,7","name":"return_home_button","labelStroke":0,"labelSize":40,"labelFont":"Microsoft YaHei","labelColors":"#FFFFFF","labelBold":false,"labelAlign":"center","label":"Home","height":99}},{"type":"Sprite","props":{"y":129,"x":85,"width":456,"var":"contract_container","name":"contract_container","height":780}}]};
		return contract_listUI;
	})(View);
var createUI=(function(_super){
		function createUI(){
			
		    this.create_title=null;
		    this.target_pubkey_label=null;
		    this.target_pubkey_input=null;
		    this.contract_title_label=null;
		    this.contract_title_input=null;
		    this.contract_content_label=null;
		    this.contract_content_input=null;
		    this.do_create_button=null;
		    this.create_wrong_tip=null;

			createUI.__super.call(this);
		}

		CLASS$(createUI,'ui.createUI',_super);
		var __proto__=createUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(createUI.uiView);

		}

		createUI.uiView={"type":"View","props":{"width":640,"height":1136},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":640,"lineWidth":1,"height":1136,"fillColor":"#2b2b2b"}},{"type":"Text","props":{"y":69,"x":0,"width":640,"var":"create_title","text":"创建您的合同","name":"create_title","height":57,"fontSize":35,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":164,"x":-133,"width":511,"var":"target_pubkey_label","text":"签署对象","name":"target_pubkey_label","height":57,"fontSize":30,"color":"#ffffff","align":"center"}},{"type":"TextInput","props":{"y":223,"x":61,"width":542,"var":"target_pubkey_input","skin":"comp/button_skin.png","sizeGrid":"12,13,12,11","prompt":"target public key","name":"target_pubkey_input","height":91,"fontSize":30,"font":"Microsoft YaHei","color":"#ffffff"}},{"type":"Text","props":{"y":371,"x":-134,"width":511,"var":"contract_title_label","text":"合同标题","name":"contract_title_label","height":57,"fontSize":30,"color":"#ffffff","align":"center"}},{"type":"TextInput","props":{"y":442,"x":60,"width":542,"var":"contract_title_input","skin":"comp/button_skin.png","sizeGrid":"12,13,12,11","prompt":"contract title","name":"contract_title_input","height":91,"fontSize":30,"font":"Microsoft YaHei","color":"#ffffff"}},{"type":"Text","props":{"y":576,"x":-138,"width":511,"var":"contract_content_label","text":"合同详情","name":"contract_content_label","height":57,"fontSize":30,"color":"#ffffff","align":"center"}},{"type":"TextArea","props":{"y":632,"x":58,"width":533,"var":"contract_content_input","skin":"comp/button_skin.png","sizeGrid":"28,23,19,12","prompt":"Write anything you wanna make deal","overflow":"scroll","name":"contract_content_input","height":227,"fontSize":30,"color":"#ffffff","align":"left"}},{"type":"Button","props":{"y":993,"x":129,"width":391,"var":"do_create_button","stateNum":1,"skin":"comp/button_skin.png","sizeGrid":"10,10,8,7","name":"do_create_button","labelStroke":0,"labelSize":40,"labelFont":"Microsoft YaHei","labelColors":"#FFFFFF","labelBold":false,"labelAlign":"center","label":"创建合同","height":99}},{"type":"Text","props":{"y":891,"x":7,"width":640,"var":"create_wrong_tip","name":"create_wrong_tip","height":49,"fontSize":35,"font":"Microsoft YaHei","color":"#f33733","align":"center"}}]};
		return createUI;
	})(View);
var create_resultUI=(function(_super){
		function create_resultUI(){
			
		    this.suc_logo=null;
		    this.create_finish_status=null;
		    this.jump_my_contract_list=null;

			create_resultUI.__super.call(this);
		}

		CLASS$(create_resultUI,'ui.create_resultUI',_super);
		var __proto__=create_resultUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(create_resultUI.uiView);

		}

		create_resultUI.uiView={"type":"View","props":{"width":640,"height":1136},"child":[{"type":"Sprite","props":{"y":0,"x":0,"width":640,"height":1136},"child":[{"type":"Rect","props":{"width":640,"lineWidth":1,"height":1136,"fillColor":"#2b2b2b"}}]},{"type":"Image","props":{"visible":false,"var":"suc_logo","skin":"comp/created.png","name":"suc_logo","centerY":-232,"centerX":0}},{"type":"Text","props":{"y":523,"x":232,"width":188,"var":"create_finish_status","text":"创建中","name":"create_finish_status","height":75,"fontSize":40,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}},{"type":"Button","props":{"y":758,"x":135,"width":391,"visible":false,"var":"jump_my_contract_list","stateNum":1,"skin":"comp/button_skin.png","sizeGrid":"10,10,8,7","name":"jump_my_contract_list","labelStroke":0,"labelSize":40,"labelFont":"Microsoft YaHei","labelColors":"#FFFFFF","labelBold":false,"labelAlign":"center","label":"返回首页","height":99}}]};
		return create_resultUI;
	})(View);
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

		mainUI.uiView={"type":"View","props":{"width":640,"height":1136},"child":[{"type":"Sprite","props":{"y":0,"x":-3,"width":640,"height":1136},"child":[{"type":"Rect","props":{"width":640,"lineWidth":1,"height":1136,"fillColor":"#2b2b2b"}}]},{"type":"Image","props":{"y":139,"width":272,"skin":"comp/wanxiang_logo.png","height":82,"centerX":-128}},{"type":"Text","props":{"y":158,"x":391,"width":243,"var":"wanxiang_city_logotext","text":"万向创新聚能城","name":"wanxiang_city_logotext","height":63,"fontSize":28,"font":"Microsoft YaHei","color":"#ffffff"}},{"type":"Text","props":{"y":362,"x":4,"width":640,"text":"商业合同生成器","height":75,"fontSize":50,"color":"#ffffff","align":"center"}},{"type":"Button","props":{"y":611,"x":133,"width":391,"var":"create_contract_button","stateNum":1,"skin":"comp/button_skin.png","sizeGrid":"10,10,8,7","name":"create_contract_button","labelStroke":0,"labelSize":40,"labelFont":"Microsoft YaHei","labelColors":"#FFFFFF","labelBold":false,"labelAlign":"center","label":"创建合同","height":99}},{"type":"Text","props":{"y":461,"x":5,"width":640,"text":"Business Contract Generator","height":75,"fontSize":40,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":52,"x":500,"width":103,"var":"change_langurage","text":"中文","height":56,"fontSize":30,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}},{"type":"Button","props":{"y":741,"x":135,"width":391,"var":"my_contract_list","stateNum":1,"skin":"comp/button_skin.png","sizeGrid":"10,10,8,7","name":"my_contract_list","labelStroke":0,"labelSize":40,"labelFont":"Microsoft YaHei","labelColors":"#FFFFFF","labelBold":false,"labelAlign":"center","label":"查看我的合同","height":99}},{"type":"Button","props":{"y":871,"x":133,"width":391,"var":"check_my_public","stateNum":1,"skin":"comp/button_skin.png","sizeGrid":"10,10,8,7","name":"check_my_public","labelStroke":0,"labelSize":40,"labelFont":"Microsoft YaHei","labelColors":"#FFFFFF","labelBold":false,"labelAlign":"center","label":"查看我的公钥","height":99}}]};
		return mainUI;
	})(View);
var my_publicUI=(function(_super){
		function my_publicUI(){
			
		    this.close_button=null;
		    this.public_label=null;

			my_publicUI.__super.call(this);
		}

		CLASS$(my_publicUI,'ui.my_publicUI',_super);
		var __proto__=my_publicUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(my_publicUI.uiView);

		}

		my_publicUI.uiView={"type":"Dialog","props":{"y":-3,"x":0,"width":640,"popupCenter":true,"name":"public_label","height":1136},"child":[{"type":"Rect","props":{"y":0,"x":-3,"width":640,"lineWidth":1,"height":1136,"fillColor":"#2b2b2b"}},{"type":"Text","props":{"y":181,"x":3,"width":640,"text":"Your Public Key","height":93,"fontSize":40,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}},{"type":"Image","props":{"y":50,"x":588,"var":"close_button","skin":"comp/close_button.png","name":"close_button"}},{"type":"TextInput","props":{"y":490,"x":33,"width":583,"var":"public_label","skin":"comp/button_skin.png","name":"public_label","height":94,"fontSize":20,"color":"#ffffff","align":"center"}}]};
		return my_publicUI;
	})(Dialog);