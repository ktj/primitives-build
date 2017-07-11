




var createStrictShapeTypeChecker=require('./createStrictShapeTypeChecker');var _require=
require('../StyleSheet'),flatten=_require.flatten;

module.exports=function StyleSheetPropType(shape){
var shapePropType=createStrictShapeTypeChecker(shape);
return function(props,propName,componentName,location){for(var _len=arguments.length,args=Array(_len>4?_len-4:0),_key=4;_key<_len;_key++){args[_key-4]=arguments[_key];}
var newProps=props;
if(props[propName]){

newProps={};
newProps[propName]=flatten(props[propName]);
}
return shapePropType.apply(undefined,[newProps,propName,componentName,location].concat(args));
};
};