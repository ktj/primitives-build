











var colorPropType=function colorPropType(isRequired,props,propName,componentName,location,propFullName){
var color=props[propName];
if(color===undefined||color===null){
if(isRequired){
return new Error(
'Required prop `'+(propFullName||propName)+
'` was not specified in `'+componentName+'`.');

}
return;
}

if(typeof color==='number'){



return;
}





















};

var ColorPropType=colorPropType.bind(null,false);
ColorPropType.isRequired=colorPropType.bind(null,true);

module.exports=ColorPropType;