var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};

require('../web/Touchable/injectResponderEventPlugin');

var ReactPrimitives=require('../ReactPrimitives');
var Animated=require('animated');
var Easing=require('animated/lib/Easing');

var View=require('../web/View/View');
var Text=require('../web/Text/Text');
var Image=require('../web/Image/Image');
var StyleSheet=require('../web/StyleSheet');
var TouchableMixin=require('../web/Touchable/TouchableMixin');

Animated.inject.FlattenStyle(StyleSheet.flatten);

ReactPrimitives.inject({
StyleSheet:StyleSheet,
View:View,
Text:Text,
Image:Image,
Easing:Easing,
Animated:_extends({},
Animated,{
View:Animated.createAnimatedComponent(View),
Text:Animated.createAnimatedComponent(Text),
Image:Animated.createAnimatedComponent(Image)}),

Platform:{
OS:'web',
Version:1}});




ReactPrimitives.inject({
Touchable:require('../modules/Touchable')(
Animated,
StyleSheet,
ReactPrimitives.Platform,
TouchableMixin)});