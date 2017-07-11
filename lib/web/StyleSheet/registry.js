var generateCss=require('./generateCss');
var hash=require('string-hash');
var mapKeyValue=require('../util/mapKeyValue');
var injector=require('./injector');

var _id=1;
var guid=function guid(){return _id++;};


var KEY=function KEY(id){return'r'+id;};
var styleRegistry={};

var createCssRule=function createCssRule(prefix,key,rule,genCss){
var cssBody=generateCss(rule);

var className=''+prefix+hash(key+cssBody).toString(36);
var css=genCss(key,className,cssBody);

injector.addRule(className,css);
return{
key:key,
className:className,
rule:rule,
css:css};

};

var repeat=function repeat(s,n){
var r=s;
var i=n;
while(--i){
r+=s;
}
return r;
};

var createPositionableCssRule=function createPositionableCssRule(prefix,rule){
var cssBody=generateCss(rule);
var className=''+prefix+hash(cssBody).toString(36);
var positions=[];
var injectPosition=function injectPosition(position){
if(positions[position]===true){
return;
}
positions[position]=true;
var css='.'+className;
for(var i=1;i<positions.length;i++){
if(positions[i]===true){
css+=','+repeat('.'+className+i,i+1);
}
}
css+='{'+cssBody+'}';

injector.addRule(className,css);
};
return{
key:null,
className:className,
injectPosition:injectPosition,
rule:rule,
css:null};

};

var extractRules=function extractRules(name,style){
var declarations={};


var mediaQueries=null;
var pseudoStyles=null;
var prefix='r';

if(process.env.NODE_ENV==='development'){
prefix=name+'_';
}

Object.keys(style).forEach(function(key){
if(key[0]===':'){
pseudoStyles=pseudoStyles||{};
pseudoStyles[key]=createCssRule(
prefix,
key,
style[key],
function(pseudo,className,body){return'.'+className+key+'{'+body+'}';});

}else if(key[0]==='@'){
mediaQueries=mediaQueries||{};
mediaQueries[key]=createCssRule(
prefix,
key,
style[key],
function(query,className,body){return query+'{.'+className+'{'+body+'}}';});

}else{
declarations[key]=style[key];
}
});

var coreRule=createPositionableCssRule(prefix,declarations);

var getClassNames=function getClassNames(position){
coreRule.injectPosition(position);
var classNames=position===0?coreRule.className:''+coreRule.className+position;

if(mediaQueries){
classNames+=' '+mapKeyValue(mediaQueries,function(_,rule){return rule.className;}).join(' ');
}

if(pseudoStyles){
classNames+=' '+mapKeyValue(pseudoStyles,function(_,rule){return rule.className;}).join(' ');
}

return classNames;
};

return{
declarations:declarations,
getClassNames:getClassNames,
coreRule:coreRule,
mediaQueries:mediaQueries,
pseudoStyles:pseudoStyles};

};

var registerStyle=function registerStyle(name,style){


var id=guid();
styleRegistry[KEY(id)]={
value:null,


thunk:function thunk(){return extractRules(name,style);}};

return id;
};

var getRegisteredStyle=function getRegisteredStyle(id){
var obj=styleRegistry[KEY(id)];
if(obj.value===null){
obj.value=obj.thunk();
}
return obj.value;
};

var getStyle=function getStyle(id){return getRegisteredStyle(id).declarations;};

var getClassNames=function getClassNames(id,position){return getRegisteredStyle(id).getClassNames(position);};

var reset=function reset(){
_id=1;
styleRegistry={};
injector.reset();
};

module.exports={
registerStyle:registerStyle,
getStyle:getStyle,
getClassNames:getClassNames,
reset:reset};