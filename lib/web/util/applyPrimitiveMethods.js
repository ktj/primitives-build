var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var ReactDOM=require('react-dom');
var UIManager=require('../UIManager');
var StyleSheet=require('../StyleSheet');

module.exports=function(Constructor,coreClassName){

Constructor.prototype.coreClassName=coreClassName;
Constructor.prototype.setNativeProps=function setNativeProps(props){
var propsToSend=props;
if('style'in props){
var resolvedStyle=StyleSheet.resolve(props.style,this.coreClassName);
propsToSend=_extends({},propsToSend,resolvedStyle);
}
UIManager.updateView(ReactDOM.findDOMNode(this),propsToSend,this._reactInternalInstance);
};
Constructor.prototype.blur=function blur(){
UIManager.blur(ReactDOM.findDOMNode(this));
};
Constructor.prototype.focus=function focus(){
UIManager.focus(ReactDOM.findDOMNode(this));
};
Constructor.prototype.measure=function measure(callback){
UIManager.measure(ReactDOM.findDOMNode(this),callback);
};
Constructor.prototype.measureInWindow=function measureInWindow(callback){
UIManager.measureInWindow(ReactDOM.findDOMNode(this),callback);
};
Constructor.prototype.measureLayout=function measureLayout(
relativeToNativeNode,
onSuccess,
onFail)
{
UIManager.measureLayout(ReactDOM.findDOMNode(this),relativeToNativeNode,onFail,onSuccess);
};
};