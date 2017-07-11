




var PropTypes=require('prop-types');var
arrayOf=PropTypes.arrayOf,oneOfType=PropTypes.oneOfType,shape=PropTypes.shape,number=PropTypes.number,string=PropTypes.string;

var ArrayOfNumberPropType=arrayOf(number);
var numberOrString=oneOfType([number,string]);

var TransformMatrixPropType=function TransformMatrixPropType(
props,
propName,
componentName)

{for(var _len=arguments.length,args=Array(_len>3?_len-3:0),_key=3;_key<_len;_key++){args[_key-3]=arguments[_key];}
if(props.transform&&props.transformMatrix){
return new Error(
'transformMatrix and transform styles cannot be used on the same '+
'component');

}
return ArrayOfNumberPropType.apply(undefined,[props,propName,componentName].concat(args));
};

var TransformPropTypes={
transform:arrayOf(
oneOfType([
shape({perspective:numberOrString}),
shape({rotate:string}),
shape({rotateX:string}),
shape({rotateY:string}),
shape({rotateZ:string}),
shape({scale:number}),
shape({scaleX:number}),
shape({scaleY:number}),
shape({skewX:numberOrString}),
shape({skewY:numberOrString}),
shape({translateX:numberOrString}),
shape({translateY:numberOrString}),
shape({translateZ:numberOrString})])),



transformMatrix:TransformMatrixPropType};


module.exports=TransformPropTypes;