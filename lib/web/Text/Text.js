var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var React=require('react');
var PropTypes=require('prop-types');
var StyleSheet=require('../StyleSheet');
var StyleSheetPropType=require('../propTypes/StyleSheetPropType');
var TextStylePropTypes=require('./TextStylePropTypes');
var applyPrimitiveMethods=require('../util/applyPrimitiveMethods');
var applyOnLayoutHandling=require('../util/applyOnLayoutHandling');
var Accessibility=require('../propTypes/Accessibility');var _require=
require('../util/flexboxSupport'),FLEXBOX_SUPPORTED=_require.FLEXBOX_SUPPORTED,applyFlexboxPolyfill=_require.applyFlexboxPolyfill;var

string=PropTypes.string,number=PropTypes.number,bool=PropTypes.bool,node=PropTypes.node,func=PropTypes.func;

var propTypes={
accessibilityLabel:string,
accessibilityLiveRegion:Accessibility.LiveRegionPropType,
accessibilityRole:Accessibility.RolePropType,
accessible:bool,
onLayout:func,
onMoveShouldSetResponder:func,
onMoveShouldSetResponderCapture:func,
onResponderGrant:func,
onResponderMove:func,
onResponderReject:func,
onResponderRelease:func,
onResponderTerminate:func,
onResponderTerminationRequest:func,
onStartShouldSetResponder:func,
onStartShouldSetResponderCapture:func,
numberOfLines:number,
style:StyleSheetPropType(TextStylePropTypes),
testID:string,
children:node};


var TEXT_CLASSNAME='rp_Text';var

Text=function(_React$Component){_inherits(Text,_React$Component);
function Text(props){_classCallCheck(this,Text);var _this=_possibleConstructorReturn(this,(Text.__proto__||Object.getPrototypeOf(Text)).call(this,
props));
if(!FLEXBOX_SUPPORTED){
_this.__setEl=_this.__setEl.bind(_this);
}return _this;
}_createClass(Text,[{key:'render',value:function render()
{var _props=




this.props,accessibilityRole=_props.accessibilityRole,style=_props.style,numberOfLines=_props.numberOfLines;

var passedStyle=numberOfLines===1?[style,styles.singleLineStyle]:style;
var resolvedStyle=StyleSheet.resolve(passedStyle,TEXT_CLASSNAME);
var Component=accessibilityRole&&Accessibility.Components[accessibilityRole]||'span';

var props={
className:resolvedStyle.className,
style:resolvedStyle.style,
children:this.props.children};


if(this.props.testID){
props['data-testid']=this.props.testID;
}

if(
this.props.onResponderGrant)
{
_extends(props,{
onMoveShouldSetResponder:this.props.onMoveShouldSetResponder,
onMoveShouldSetResponderCapture:this.props.onMoveShouldSetResponderCapture,
onResponderGrant:this.props.onResponderGrant,
onResponderMove:this.props.onResponderMove,
onResponderReject:this.props.onResponderReject,
onResponderRelease:this.props.onResponderRelease,
onResponderTerminate:this.props.onResponderTerminate,
onResponderTerminationRequest:this.props.onResponderTerminationRequest,
onStartShouldSetResponder:this.props.onStartShouldSetResponder,
onStartShouldSetResponderCapture:this.props.onStartShouldSetResponderCapture});

}

if(
this.props.accessible!==undefined||
this.props.accessibilityLabel||
this.props.accessibilityRole)
{
_extends(props,{
'aria-hidden':this.props.accessible===false,
'aria-label':this.props.accessibilityLabel,
'aria-live':this.props.accessibilityLiveRegion,
role:accessibilityRole});

}

if(this.props.onLayout){
this.applyOnLayoutIfNeeded();
}

if(!FLEXBOX_SUPPORTED){




props.ref=this.__setEl;
this._lastResolvedStyle=resolvedStyle.style;
}

return React.createElement(Component,props);
}}]);return Text;}(React.Component);


Text.propTypes=propTypes;
Text.displayName='Text';

applyPrimitiveMethods(Text,TEXT_CLASSNAME);
applyFlexboxPolyfill(Text);
applyOnLayoutHandling(Text);

var styles=StyleSheet.create({
singleLineStyle:{
maxWidth:'100%',
overflow:'hidden',
textOverflow:'ellipsis',
whiteSpace:'nowrap'}});



module.exports=Text;