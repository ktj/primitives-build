var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var getHairlineWidth=require('./getHairlineWidth');
var transformToWebStyle=require('./transformToWebStyle');var _require=
require('./registry'),reset=_require.reset,registerStyle=_require.registerStyle,getStyle=_require.getStyle,getClassNames=_require.getClassNames;
var init=require('./initialStyles');
var injector=require('./injector');







var hasOwnProperty=Object.prototype.hasOwnProperty;

var create=function create(styles){
var result={};
Object.keys(styles).forEach(function(key){
result[key]=registerStyle(key,styles[key]);
});
return result;
};

var mergeTransforms=function mergeTransforms(a,b){
if(!a||a.length===0)return b;
var result=[];
var transformsInA=a.reduce(function(hash,t){
var key=Object.keys(t)[0];
result.push(t);
hash[key]=result.length-1;
return hash;
},{});
b.forEach(function(t){
var key=Object.keys(t)[0];
var index=transformsInA[key];
if(index!==undefined){
result[index]=t;
}else{
result.push(t);
}
});
return result;
};




var assignStyle=function assignStyle(a,b){
var key=void 0;
for(key in b){
if(hasOwnProperty.call(b,key)){
switch(key){
case'transform':
a[key]=mergeTransforms(a[key],b[key]);
break;
default:

a[key]=b[key];
break;}

}
}
return a;
};

var flattenStyle=function flattenStyle(input,expandRegisteredStyles){

if(!Array.isArray(input)){
if(typeof input==='number'){
return expandRegisteredStyles?getStyle(input):undefined;
}
if(!input){
return undefined;
}
return input;
}
var result={};
var hasResult=false;
var stack=[{i:0,array:input}];
while(stack.length){
var iterator=stack.pop();
var i=iterator.i;
var array=iterator.array;
for(;i<array.length;i++){
var el=array[i];
if(Array.isArray(el)){
stack.push({i:i+1,array:array});
stack.push({i:0,array:el});
break;
}
if(typeof el==='number'){
if(expandRegisteredStyles){
hasResult=true;
assignStyle(result,getStyle(el));
}
}else if(el){
hasResult=true;
assignStyle(result,el);
}
}
}
return hasResult?result:undefined;
};

var flattenClassNames=function flattenClassNames(input,flag){

if(!Array.isArray(input)){
if(typeof input==='number'){
return getClassNames(input,0);
}
return null;
}
var result='';
var position=0;
var hasSeenObject=false;
var stack=[{i:0,array:input}];
while(stack.length){
var iterator=stack.pop();
var i=iterator.i;
var array=iterator.array;
for(;i<array.length;i++){
var el=array[i];
if(Array.isArray(el)){
stack.push({i:i+1,array:array});
stack.push({i:0,array:el});
break;
}
if(typeof el==='number'){
result+=getClassNames(el,position)+' ';
if(hasSeenObject){

flag.deopt=true;
}
}else if(el){
hasSeenObject=true;
}
position++;
}
}
return result;
};

var resolve=function resolve(styles,extraClassName){
var flag={deopt:false};
var classes=flattenClassNames(styles,flag);
var style=flattenStyle(styles,flag.deopt);
return{
className:!classes||flag.deopt?extraClassName:extraClassName+' '+classes,
style:style?transformToWebStyle(style):null};

};

var returnCopy=function returnCopy(original,result){
if(original===result||typeof original==='number'){
return _extends({},result);
}
return result;
};

init();




var absoluteFillObject={
position:'absolute',
top:0,
left:0,
bottom:0,
right:0};


module.exports={
hairlineWidth:getHairlineWidth(),
absoluteFillObject:absoluteFillObject,
absoluteFill:registerStyle('absoluteFill',absoluteFillObject),
create:create,



flatten:function flatten(style){return returnCopy(style,flattenStyle(style,true))||{};},


resolve:resolve,

reset:reset,

getStyleSheetHtml:injector.getStyleSheetHtml};