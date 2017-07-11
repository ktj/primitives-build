function throttleAndDebounce(fn,throttleMs,debounceMs){
var lastCall=null;
var timeout=null;

return function(){
if(timeout!==null){
return;
}

var now=new Date();
if(lastCall===null||now-lastCall>throttleMs){
timeout=setTimeout(function(){
fn();
timeout=null;
lastCall=new Date();
},debounceMs);
}
};
}

module.exports=throttleAndDebounce;