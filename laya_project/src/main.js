
var ViewManager = require('./viewManager');
window.onload = function(){

 	var SCREEN_WIDTH = 640;
	var SCREEN_HEIGHT = 1136;

 	Laya.init(SCREEN_WIDTH, SCREEN_HEIGHT,Laya.WebGL);
	Laya.stage.scaleMode = "noborder";

	ViewManager.initlize();
	
}