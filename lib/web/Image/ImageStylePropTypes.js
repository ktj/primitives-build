var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var PropTypes=require('prop-types');
var ColorPropType=require('../propTypes/ColorPropType');
var LayoutPropTypes=require('../propTypes/LayoutPropTypes');
var TransformPropTypes=require('../propTypes/TransformPropTypes');
var BorderPropTypes=require('../propTypes/BorderPropTypes');

var ImageResizeMode=require('./ImageResizeMode');var

number=PropTypes.number,oneOf=PropTypes.oneOf,string=PropTypes.string;
var hiddenOrVisible=oneOf([
'hidden',
'visible']);


module.exports=_extends({},
BorderPropTypes,
LayoutPropTypes,
TransformPropTypes,{
backfaceVisibility:hiddenOrVisible,
backgroundColor:ColorPropType,
resizeMode:oneOf(Object.keys(ImageResizeMode)),

boxShadow:string,
opacity:number,
overflow:hiddenOrVisible,

visibility:hiddenOrVisible});