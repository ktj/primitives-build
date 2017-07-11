var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};








var invariant=require('invariant');

module.exports=function createStrictShapeTypeChecker(shapeTypes){
function checkType(isRequired,props,propName,componentName,location){
if(!props[propName]){
if(isRequired){
invariant(
false,
'Required object `'+propName+'` was not specified in '+('`'+
componentName+'`.'));

}
return;
}
var propValue=props[propName];
var propType=typeof propValue;
if(propType!=='object'){
invariant(
false,
'Invalid prop `'+propName+'` of type `'+propType+'` '+('supplied to `'+
componentName+'`, expected `object`.'));

}


var allKeys=_extends({},props[propName],shapeTypes);for(var _len=arguments.length,args=Array(_len>5?_len-5:0),_key=5;_key<_len;_key++){args[_key-5]=arguments[_key];}
for(var key in allKeys){
if(!allKeys.hasOwnProperty(key))continue;
var checker=shapeTypes[key];
if(!checker){
invariant(
false,
'Invalid props.'+propName+' key `'+key+'` supplied to `'+componentName+'`.'+'\nBad object: '+
JSON.stringify(props[propName],null,'  ')+'\nValid keys: '+
JSON.stringify(Object.keys(shapeTypes),null,'  '));

}
var error=checker.apply(undefined,[propValue,key,componentName,location].concat(args));
if(error){
invariant(
false,
error.message+'\nBad object: '+JSON.stringify(props[propName],null,'  '));

}
}
}

function chainedCheckType(
props,
propName,
componentName,
location)

{for(var _len2=arguments.length,args=Array(_len2>4?_len2-4:0),_key2=4;_key2<_len2;_key2++){args[_key2-4]=arguments[_key2];}
return checkType.apply(undefined,[false,props,propName,componentName,location].concat(args));
}
chainedCheckType.isRequired=checkType.bind(null,true);
return chainedCheckType;
};