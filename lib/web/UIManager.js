var asap=require('asap');
var CSSPropertyOperations=require('react-dom/lib/CSSPropertyOperations');

var hasOwnProperty=Object.prototype.hasOwnProperty;

var _measureLayout=function _measureLayout(node,relativeToNativeNode,callback){
asap(function(){
var relativeNode=relativeToNativeNode||node.parentNode;
var relativeRect=relativeNode.getBoundingClientRect();var _node$getBoundingClie=
node.getBoundingClientRect(),height=_node$getBoundingClie.height,left=_node$getBoundingClie.left,top=_node$getBoundingClie.top,width=_node$getBoundingClie.width;
var x=left-relativeRect.left;
var y=top-relativeRect.top;
callback(x,y,width,height,left,top);
});
};

var UIManager={
blur:function blur(node){
try{node.blur();}catch(err){}
},

focus:function focus(node){
try{node.focus();}catch(err){}
},

measure:function measure(node,callback){
_measureLayout(node,null,callback);
},

measureInWindow:function measureInWindow(node,callback){
asap(function(){var _node$getBoundingClie2=
node.getBoundingClientRect(),height=_node$getBoundingClie2.height,left=_node$getBoundingClie2.left,top=_node$getBoundingClie2.top,width=_node$getBoundingClie2.width;
callback(left,top,width,height);
});
},

measureLayout:function measureLayout(node,relativeToNativeNode,onFail,onSuccess){
var relativeTo=relativeToNativeNode||node.parentNode;
_measureLayout(node,relativeTo,onSuccess);
},

updateView:function updateView(node,props,instance){
for(var prop in props){
if(!hasOwnProperty.call(props,prop)){
continue;
}
var value=props[prop];
switch(prop){
case'style':

CSSPropertyOperations.setValueForStyles(node,value,instance);
break;
case'class':
case'className':

node.setAttribute('class',value);
break;
case'text':
case'value':


node.value=value;
break;
default:
node.setAttribute(prop,value);
break;}

}
}};


module.exports=UIManager;