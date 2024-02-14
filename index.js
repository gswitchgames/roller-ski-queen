//-----libs-begin-----

//-----libs-end-------
window.screenOrientation = "sensor_landscape", 

loadLib("@babel/runtime/helpers/typeof.js");

loadLib("libs/min/laya.core.js"),
loadLib("libs/min/laya.ani.js"),
loadLib("libs/min/laya.ui.js"),
loadLib("libs/min/laya.tiledmap.js"),
loadLib("libs/min/laya.d3.js"),
loadLib("libs/min/laya.html.js"),
loadLib("libs/min/laya.particle.js"),
loadLib("libs/min/laya.physics_o.js")


loadLib("utils/jiujiu_sdk_conf.js"), 
loadLib("utils/jiujiu_pull_sdk.js"), 
null != window.wx && loadLib("utils/jiujiu_sdk.js"), 
loadLib("js/bundle.js");