var _jsxFileName='src/web/Image/Image.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var React=require('react');
var PropTypes=require('prop-types');
var StyleSheet=require('../StyleSheet');
var View=require('../View/View');
var resolveAssetSource=require('./resolveAssetSource');
var ImageResizeMode=require('./ImageResizeMode');
var ImageStylePropTypes=require('./ImageStylePropTypes');
var StyleSheetPropType=require('../propTypes/StyleSheetPropType');
var applyPrimitiveMethods=require('../util/applyPrimitiveMethods');

var STATUS_ERRORED='ERRORED';
var STATUS_LOADED='LOADED';
var STATUS_LOADING='LOADING';
var STATUS_PENDING='PENDING';
var STATUS_IDLE='IDLE';var

string=PropTypes.string,node=PropTypes.node,bool=PropTypes.bool,func=PropTypes.func,oneOf=PropTypes.oneOf;

var ImageSourcePropType=PropTypes.oneOfType([
PropTypes.shape({
uri:PropTypes.string.isRequired}),

PropTypes.string]);


var propTypes={
accessibilityLabel:string,
accessibilityLiveRegion:oneOf([
'assertive',
'off',
'polite']),

accessibilityRole:string,
accessible:bool,
children:node,
defaultSource:ImageSourcePropType,
onLayout:func,
onError:func,
onLoad:func,
onLoadEnd:func,
onLoadStart:func,
resizeMode:oneOf([
'contain',
'cover',
'none',
'stretch']),

source:ImageSourcePropType,
style:StyleSheetPropType(ImageStylePropTypes),
testID:string};



var BOTH={
flex:true,
position:true};



var INNER={
padding:true,
paddingBottom:true,
paddingHorizontal:true,
paddingLeft:true,
paddingRight:true,
paddingTop:true,
paddingVertical:true,

flexDirection:true,
flexBasis:true,
flexGrow:true,
flexShrink:true,
flexWrap:true,

justifyContent:true,
alignItems:true,

backgroundColor:true};


function extractStyles(style,passedResizeMode){
if(!style){
return{inner:null,outer:null};
}
var styles=StyleSheet.flatten(style);
var inner={};
var outer={};
var resizeMode=passedResizeMode||styles.resizeMode||ImageResizeMode.cover;

Object.keys(styles).forEach(function(key){
if(key==='resizeMode'){

}else if(INNER[key]){
inner[key]=styles[key];
}else if(BOTH[key]){
inner[key]=styles[key];
outer[key]=styles[key];
}else{
outer[key]=styles[key];
}
if(key==='position'&&styles[key]==='absolute'){


inner.top=0;
inner.left=0;
inner.bottom=0;
inner.right=0;
}
});

return{inner:inner,outer:outer,resizeMode:resizeMode};
}

var imageCache={};

var promiseForImage=function promiseForImage(uri){
if(imageCache[uri])return imageCache[uri];
if(!global.Image){
throw new Error('Attempting to prefetch image '+uri+' in a server-rendered route');
}
var promise=new Promise(function(resolve,reject){
var image=new global.Image();
image.onerror=reject;
image.onload=function(){
resolve({
width:image.naturalWidth||image.width,
height:image.naturalHeight||image.height});

};
image.src=uri;
});
imageCache[uri]=promise;
return promise;
};var


Image=function(_React$Component){_inherits(Image,_React$Component);_createClass(Image,null,[{key:'prefetch',value:function prefetch(

url){
return promiseForImage(url).then(function(){return true;});
}},{key:'getSize',value:function getSize(

url,success,failure){
promiseForImage(url).then(function(_ref){var width=_ref.width,height=_ref.height;return success(width,height);},failure);
}}]);

function Image(props,context){_classCallCheck(this,Image);var _this=_possibleConstructorReturn(this,(Image.__proto__||Object.getPrototypeOf(Image)).call(this,
props,context));
var uri=resolveAssetSource(props.source);

_this.state={status:uri?STATUS_PENDING:STATUS_IDLE};

_this._onError=_this._onError.bind(_this);
_this._onLoad=_this._onLoad.bind(_this);return _this;
}_createClass(Image,[{key:'componentDidMount',value:function componentDidMount()

{
if(this.state.status===STATUS_PENDING){
this._createImageLoader();
}
}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(

nextProps){
var nextUri=resolveAssetSource(nextProps.source);
if(resolveAssetSource(this.props.source)!==nextUri){
this.setState({
status:nextUri?STATUS_PENDING:STATUS_IDLE});

}
}},{key:'componentDidUpdate',value:function componentDidUpdate()

{
if(this.state.status===STATUS_PENDING&&!this._image){
this._createImageLoader();
}
}},{key:'componentWillUnmount',value:function componentWillUnmount()

{
this._destroyImageLoader();
}},{key:'_createImageLoader',value:function _createImageLoader()

{
var uri=resolveAssetSource(this.props.source);

this._destroyImageLoader();
this._image=new global.Image();
this._image.onerror=this._onError;
this._image.onload=this._onLoad;
this._image.src=uri;
this._onLoadStart();
}},{key:'_destroyImageLoader',value:function _destroyImageLoader()

{
if(this._image){
this._image.onerror=null;
this._image.onload=null;
this._image=null;
}
}},{key:'_onError',value:function _onError(

e){var
onError=this.props.onError;
var event={nativeEvent:e};

this._destroyImageLoader();
this.setState({status:STATUS_ERRORED});
this._onLoadEnd();
if(onError)onError(event);
}},{key:'_onLoad',value:function _onLoad(

e){var
onLoad=this.props.onLoad;
var event={nativeEvent:e};

this._destroyImageLoader();
this.setState({status:STATUS_LOADED});
if(onLoad)onLoad(event);
this._onLoadEnd();
}},{key:'_onLoadEnd',value:function _onLoadEnd()

{var
onLoadEnd=this.props.onLoadEnd;
if(onLoadEnd)onLoadEnd();
}},{key:'_onLoadStart',value:function _onLoadStart()

{var
onLoadStart=this.props.onLoadStart;
this.setState({status:STATUS_LOADING});
if(onLoadStart)onLoadStart();
}},{key:'render',value:function render()

{var _props=








this.props,accessibilityLabel=_props.accessibilityLabel,accessible=_props.accessible,children=_props.children,defaultSource=_props.defaultSource,source=_props.source,testID=_props.testID,onLayout=_props.onLayout;

var isLoaded=this.state.status===STATUS_LOADED;
var displayImage=resolveAssetSource(!isLoaded?defaultSource:source);
var backgroundImage=displayImage?'url("'+displayImage+'")':null;var _extractStyles=





extractStyles(this.props.style,this.props.resizeMode),outer=_extractStyles.outer,inner=_extractStyles.inner,resizeMode=_extractStyles.resizeMode;








return(
React.createElement(View,{
accessibilityLabel:accessibilityLabel,
accessibilityRole:'img',
accessible:accessible,
onLayout:onLayout,
style:[
styles.container,
outer,
backgroundImage&&{backgroundImage:backgroundImage},
resizeModeStyles[resizeMode]],

testID:testID,__source:{fileName:_jsxFileName,lineNumber:261}},

React.createElement('img',{
src:displayImage,
className:'rp_Image',__source:{fileName:_jsxFileName,lineNumber:274}}),

children&&
React.createElement(View,{
pointerEvents:'box-none',
style:[StyleSheet.absoluteFill,inner],__source:{fileName:_jsxFileName,lineNumber:279}},

children)));




}}]);return Image;}(React.Component);


Image.propTypes=propTypes;
Image.resizeMode=ImageResizeMode;
Image.displayName='Image';

applyPrimitiveMethods(Image);

var styles=StyleSheet.create({
container:{
alignSelf:'flex-start',
backgroundColor:'transparent',
backgroundPosition:'center',
backgroundRepeat:'no-repeat',
backgroundSize:'cover'}});



var resizeModeStyles=StyleSheet.create({
contain:{
backgroundSize:'contain'},

cover:{
backgroundSize:'cover'},

none:{
backgroundSize:'auto'},

stretch:{
backgroundSize:'100% 100%'}});



module.exports=Image;