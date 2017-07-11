var hasOwnProperty=Object.prototype.hasOwnProperty;

var mapKeyValue=function mapKeyValue(obj,fn){
var result=[];
for(var key in obj){
if(hasOwnProperty.call(obj,key)){
result.push(fn(key,obj[key]));
}
}
return result;
};

module.exports=mapKeyValue;