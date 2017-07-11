var prefixAll=require('inline-style-prefixer/static');
var prefixedProperties=require('./prefixedProperties');
var normalizeValue=require('./normalizeValue');
var colorWithOpacity=require('../util/colorWithOpacity');
var hasOwnProperty=Object.prototype.hasOwnProperty;

var styleShortHands={
borderColor:{
borderTopColor:true,
borderRightColor:true,
borderBottomColor:true,
borderLeftColor:true},

borderRadius:{
borderTopLeftRadius:true,
borderTopRightRadius:true,
borderBottomRightRadius:true,
borderBottomLeftRadius:true},

borderStyle:{
borderTopStyle:true,
borderRightStyle:true,
borderBottomStyle:true,
borderLeftStyle:true},

borderWidth:{
borderTopWidth:true,
borderRightWidth:true,
borderBottomWidth:true,
borderLeftWidth:true},

margin:{
marginTop:true,
marginRight:true,
marginBottom:true,
marginLeft:true},

marginHorizontal:{
marginRight:true,
marginLeft:true},

marginVertical:{
marginTop:true,
marginBottom:true},

overflow:{
overflowX:true,
overflowY:true},

padding:{
paddingTop:true,
paddingRight:true,
paddingBottom:true,
paddingLeft:true},

paddingHorizontal:{
paddingRight:true,
paddingLeft:true},

paddingVertical:{
paddingTop:true,
paddingBottom:true},

textDecorationLine:{
textDecoration:true},

writingDirection:{
direction:true}};









var sortProps=function sortProps(propsArray){return propsArray.sort(function(a,b){
var expandedA=styleShortHands[a];
var expandedB=styleShortHands[b];
if(expandedA&&expandedA[b]){
return-1;
}else if(expandedB&&expandedB[a]){
return 1;
}

return a<b?-1:a>b?1:0;
});};

var resolveFlexStyle=function resolveFlexStyle(resolvedStyle,flex){


resolvedStyle.flexGrow=flex;

resolvedStyle.flexShrink=1;

resolvedStyle.flexBasis='auto';
};

var resolveShadowProperty=function resolveShadowProperty(resolvedStyle,style){
var opacity=style.shadowOpacity!=null?style.shadowOpacity:1;
var color=colorWithOpacity(style.shadowColor,opacity);
var offset=style.shadowOffset||{width:0,height:0};
var x=normalizeValue('width',offset.width||0);
var y=normalizeValue('height',offset.height||0);
var r=style.shadowRadius||0;





var rpx=normalizeValue('shadowRadius',r*3);


resolvedStyle.boxShadow=color+' '+x+' '+y+' '+rpx;
};


var mapTransform=function mapTransform(transform){
var key=Object.keys(transform)[0];
return key+'('+normalizeValue(key,transform[key])+')';
};


var resolveTransformProperty=function resolveTransformProperty(resolvedStyle,transform){

resolvedStyle.transform=transform.map(mapTransform).join(' ');
};




var transformToWebStyle=function transformToWebStyle(style){
if(!style)return style;

var propsArray=Object.keys(style);
var sortedProps=sortProps(propsArray);
var resolvedStyle={};
var hasResolvedShadow=false;
var needsPrefix=false;

for(var i=0;i<sortedProps.length;i++){
var key=sortedProps[i];
var value=style[key];
if(!needsPrefix&&prefixedProperties[key]){
needsPrefix=true;
}
switch(key){
case'flex':
resolveFlexStyle(resolvedStyle,value,style);
break;
case'textAlignVertical':
resolvedStyle.verticalAlign=value==='center'?'middle':value;
break;
case'transform':
resolveTransformProperty(resolvedStyle,value);
break;
case'shadowColor':
case'shadowOffset':
case'shadowOpacity':
case'shadowRadius':
if(!hasResolvedShadow){
resolveShadowProperty(resolvedStyle,style);
hasResolvedShadow=true;
}
break;
case'borderColor':
case'borderRadius':
case'borderStyle':
case'borderWidth':
case'margin':
case'marginHorizontal':
case'marginVertical':
case'overflow':
case'padding':
case'paddingHorizontal':
case'paddingVertical':
case'textDecorationLine':
case'writingDirection':{
var expandedProps=styleShortHands[key];
var normalizedVal=normalizeValue(key,value);
for(var propName in expandedProps){
if(hasOwnProperty.call(expandedProps,propName)){
resolvedStyle[propName]=normalizedVal;
}
}
}break;
case'elevation':

break;
default:
resolvedStyle[key]=normalizeValue(key,value);
break;}

}


if(needsPrefix){
resolvedStyle=prefixAll(resolvedStyle);
}
return resolvedStyle;
};

module.exports=transformToWebStyle;