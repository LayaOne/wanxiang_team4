/**
 * Module dependencies.
 */
const url = require('url');
const queryString = require('query-string');
const ms_session_model = require('../../db/mongodb/ms_session.js');
const { CMDFactory } = require('./cmd_manager.js');
const mlogger = require("../../utils/mlogger");

var browser_info = function(session_id, send) {
	this.session_id = session_id;
	this.cb_send = send;
	
	return {
		get_session_id : () => {
			return this.session_id;
		},
		send_msg: (msg) => {
			this.cb_send(this.session_id, msg);
		},
		create_aes: () => {
			return crypto.createCipher("aes-128-cfb", bytes);
		}
	};
}

var browser_mgr = (function(){
	var instance;

	function init(){
		var browsers = {};
		
		return {
			add_browser: (session_id, browser) => {
				browsers[session_id] = browser;
				
				mlogger.info("add browser id:" + session_id);
			},
			get_browser: (session_id) => {
				if (session_id != "") {
					return browsers[session_id];
				} else {
					return null;
				}
			},
			remove_browser: (session_id) => {
				delete browsers[session_id];

				mlogger.info("remove browser id:" + session_id);
			},
			handle : function(packet, id, send){
				if(Object.prototype.hasOwnProperty.call(browsers, id)){
					var browser = browsers[id];
					
					if(!!browser) {
						CMDFactory.create(packet, browser);
					}else{
						mlogger.error("no browser found by id:" + id);
					}
				}else{
					/*
					ms_session_model.select(query.sessionID, function(doc){
						if(doc){
							var browser = new browser_info(id, send);
							
							self.add_browser(id, browser);
							
							browser.send_msg({
								cmd_id: 'connected'
							});
						}
					});
					*/
					var browser = new browser_info(id, send);
					
					this.add_browser(id, browser);
				}
			}
		}
	}

	return {
		get_instance: function(){
			if (!this.instance) {
				instance = init();
			}

			return instance;
		}
	}
})().get_instance();

module.exports = browser_mgr;
