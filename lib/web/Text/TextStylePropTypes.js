var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var PropTypes=require('prop-types');
var ColorPropType=require('../propTypes/ColorPropType');
var ViewStylePropTypes=require('../View/ViewStylePropTypes');var

oneOf=PropTypes.oneOf,string=PropTypes.string;
var numberOrString=PropTypes.oneOfType([PropTypes.number,string]);

module.exports=_extends({},
ViewStylePropTypes,{
color:ColorPropType,
fontFamily:string,
fontSize:numberOrString,
fontStyle:string,
fontWeight:string,
letterSpacing:numberOrString,
lineHeight:numberOrString,
textAlign:oneOf([
'center',
'inherit',
'justify',
'justify-all',
'left',
'right']),

textAlignVertical:oneOf([
'auto',
'bottom',
'center',
'top']),

textDecorationLine:string,

textOverflow:string,

textShadow:string,

textTransform:oneOf([
'capitalize',
'lowercase',
'none',
'uppercase']),


whiteSpace:string,

wordWrap:string,
writingDirection:oneOf([
'auto',
'ltr',
'rtl'])});