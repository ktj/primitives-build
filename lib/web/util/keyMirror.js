var invariant=require('invariant');

var keyMirror=function keyMirror(obj){
var ret={};
invariant(
obj instanceof Object&&!Array.isArray(obj),
'keyMirror(...): Argument must be an object.');

for(var key in obj){
if(!obj.hasOwnProperty(key)){
continue;
}
ret[key]=key;
}
return ret;
};

module.exports=keyMirror;