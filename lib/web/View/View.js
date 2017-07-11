var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var React=require('react');
var PropTypes=require('prop-types');
var StyleSheet=require('../StyleSheet');
var StyleSheetPropType=require('../propTypes/StyleSheetPropType');
var ViewStylePropTypes=require('./ViewStylePropTypes');
var normalizeNativeEvent=require('../Touchable/normalizeNativeEvent');
var applyPrimitiveMethods=require('../util/applyPrimitiveMethods');
var applyOnLayoutHandling=require('../util/applyOnLayoutHandling');
var Accessibility=require('../propTypes/Accessibility');var _require=
require('../util/flexboxSupport'),FLEXBOX_SUPPORTED=_require.FLEXBOX_SUPPORTED,applyFlexboxPolyfill=_require.applyFlexboxPolyfill;var

func=PropTypes.func,string=PropTypes.string;

var propTypes={
accessibilityLabel:string,
accessibilityLiveRegion:Accessibility.LiveRegionPropType,
accessibilityRole:Accessibility.RolePropType,
accessible:PropTypes.bool,
children:PropTypes.node,
onClick:func,
onClickCapture:func,
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
onTouchCancel:func,
onTouchCancelCapture:func,
onTouchEnd:func,
onTouchEndCapture:func,
onTouchMove:func,
onTouchMoveCapture:func,
onTouchStart:func,
onTouchStartCapture:func,
pointerEvents:PropTypes.oneOf([
'auto',
'box-none',
'box-only',
'none']),

style:StyleSheetPropType(ViewStylePropTypes),
testID:string};






function normalizeHandler(handler){
if(!handler){
return undefined;
}
return function(e){

if(e.nativeEvent.pageX===undefined){
e.nativeEvent=normalizeNativeEvent(e.nativeEvent);
}
handler(e);
};
}

var VIEW_CLASSNAME='rp_View';var

View=function(_React$Component){_inherits(View,_React$Component);
function View(props){_classCallCheck(this,View);var _this=_possibleConstructorReturn(this,(View.__proto__||Object.getPrototypeOf(View)).call(this,
props));
if(!FLEXBOX_SUPPORTED){
_this.__setEl=_this.__setEl.bind(_this);
}return _this;
}return View;}(React.Component);


View.prototype.render=function render(){var _props=







this.props,pointerEvents=_props.pointerEvents,style=_props.style,accessibilityRole=_props.accessibilityRole;

var passedStyle=!pointerEvents?style:[style,{pointerEvents:pointerEvents}];

var resolvedStyle=StyleSheet.resolve(passedStyle,VIEW_CLASSNAME);
var Component=accessibilityRole&&Accessibility.Components[accessibilityRole]||'div';
var props={
className:resolvedStyle.className,
style:resolvedStyle.style,
children:this.props.children};


if(
this.props.onClick||
this.props.onResponderGrant||
this.props.onTouchStart)
{
_extends(props,{
onClick:this.props.onClick,
onClickCapture:this.props.onClickCapture,
onMoveShouldSetResponder:this.props.onMoveShouldSetResponder,
onMoveShouldSetResponderCapture:this.props.onMoveShouldSetResponderCapture,
onResponderGrant:this.props.onResponderGrant,
onResponderMove:this.props.onResponderMove,
onResponderReject:this.props.onResponderReject,
onResponderRelease:this.props.onResponderRelease,
onResponderTerminate:this.props.onResponderTerminate,
onResponderTerminationRequest:this.props.onResponderTerminationRequest,
onStartShouldSetResponder:this.props.onStartShouldSetResponder,
onStartShouldSetResponderCapture:this.props.onStartShouldSetResponderCapture,
onScroll:this.props.onScroll,
onTouchCancel:normalizeHandler(this.props.onTouchCancel),
onTouchCancelCapture:normalizeHandler(this.props.onTouchCancelCapture),
onTouchEnd:normalizeHandler(this.props.onTouchEnd),
onTouchEndCapture:normalizeHandler(this.props.onTouchEndCapture),
onTouchMove:normalizeHandler(this.props.onTouchMove),
onTouchMoveCapture:normalizeHandler(this.props.onTouchMoveCapture),
onTouchStart:normalizeHandler(this.props.onTouchStart),
onTouchStartCapture:normalizeHandler(this.props.onTouchStartCapture)});

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
};

View.propTypes=propTypes;
View.displayName='View';

applyPrimitiveMethods(View,VIEW_CLASSNAME);
applyFlexboxPolyfill(View);
applyOnLayoutHandling(View);

module.exports=View;