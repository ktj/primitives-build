var normalizeValue=require('./normalizeValue');
var hyphenate=require('./hyphenate');
var mapKeyValue=require('../util/mapKeyValue');
var transformToWebStyle=require('./transformToWebStyle');












var generateCss=function generateCss(style){return mapKeyValue(transformToWebStyle(style),function(key,val){
var name=hyphenate(key);
var value=normalizeValue(key,val);
if(Array.isArray(val)){
return val.map(function(v){return name+':'+v+';';}).join('');
}
return name+':'+value+';';
}).join('');};

module.exports=generateCss;