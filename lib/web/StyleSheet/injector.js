var asap=require('asap');

var hasOwnProperty=Object.prototype.hasOwnProperty;


var registry={};
var isDirty=false;
var styleNode=null;

var getStyleText=function getStyleText(){

var result='\n';
for(var key in registry){
if(hasOwnProperty.call(registry,key)){
result+=registry[key]+'\n';
}
}
return result;
};

var frame=function frame(){
if(!isDirty)return;
if(!global.document)return;
var document=global.document;
isDirty=false;






if(!styleNode&&document.querySelector){
styleNode=document.querySelector('style[data-react-primitives-stylesheet]');
}

if(!styleNode){


var head=document.head||document.getElementsByTagName('head')[0];
styleNode=document.createElement('style');

styleNode.type='text/css';
styleNode.setAttribute('data-react-primitives-stylesheet','');
head.appendChild(styleNode);
}

var css=getStyleText();

if(styleNode.styleSheet){
styleNode.styleSheet.cssText=css;
}else{

var last=void 0;
while(last=styleNode.lastChild){
styleNode.removeChild(last);
}
styleNode.appendChild(document.createTextNode(css));
}
};

var addRule=function addRule(key,rule){
registry[key]=rule;
if(!isDirty){
isDirty=true;
if(global.document){



asap(frame);
}
}
};

var getStyleSheetHtml=function getStyleSheetHtml(){return'<style data-react-primitives-stylesheet>'+getStyleText()+'</style>';};

module.exports={
addRule:addRule,
getStyleSheetHtml:getStyleSheetHtml,
reset:function reset(){registry={};}};