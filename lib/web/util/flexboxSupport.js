
var CSSPropertyOperations=require('react-dom/lib/CSSPropertyOperations');

var FLEXBOX_SUPPORTED=function(){
if(!global.document){
return true;
}
var test=document.createElement('test');

test.style.display='flex';

return test.style.display==='flex';
}();



function polyfill(){















}


var POLYFILL_THROTTLE=100;

var lastCall=null;
var timeout=null;

function throttledPolyfill(){
if(timeout!==null){
return;
}
var now=new Date();
if(lastCall===null||now-lastCall>POLYFILL_THROTTLE){
timeout=setTimeout(function(){
polyfill();
timeout=null;
lastCall=new Date();
},1000/60);
}
}









function componentDidUpdate(){
if(this.el&&this._lastResolvedStyle){
var styleMarkup=CSSPropertyOperations.createMarkupForStyles(this._lastResolvedStyle);
if(this.dataStyleAttribute!==styleMarkup){
this.el.setAttribute('data-style',styleMarkup);
this.dataStyleAttribute=styleMarkup;
throttledPolyfill();
}
}
}

function componentDidMount(){
if(this.el&&this._lastResolvedStyle){
var styleMarkup=CSSPropertyOperations.createMarkupForStyles(this._lastResolvedStyle);
this.el.setAttribute('data-style',styleMarkup);
this.dataStyleAttribute=styleMarkup;
throttledPolyfill();
}
}

function setElementRef(el){
this.el=el;
}



function applyFlexboxPolyfill(Component){
if(!FLEXBOX_SUPPORTED){

Component.prototype.componentDidUpdate=componentDidUpdate;

Component.prototype.componentDidMount=componentDidMount;

Component.prototype.__setEl=setElementRef;
}
}


module.exports={
FLEXBOX_SUPPORTED:FLEXBOX_SUPPORTED,
applyFlexboxPolyfill:applyFlexboxPolyfill};