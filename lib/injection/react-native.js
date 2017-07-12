var ReactPrimitives=require('../ReactPrimitives');var _require=

require('react-native'),Touchable=_require.Touchable;var _require2=










require('react-native'),Animated=_require2.Animated,View=_require2.View,Text=_require2.Text,Image=_require2.Image,StyleSheet=_require2.StyleSheet,Platform=_require2.Platform,Easing=_require2.Easing,Dimensions=_require2.Dimensions;

ReactPrimitives.inject({
StyleSheet:StyleSheet,
View:View,
Text:Text,
Image:Image,
Easing:Easing,
Animated:Animated,
Platform:{
OS:Platform.OS,
Version:Platform.Version},

Dimensions:Dimensions,
Touchable:require('../modules/Touchable')(Animated,StyleSheet,Platform,Touchable.Mixin)});