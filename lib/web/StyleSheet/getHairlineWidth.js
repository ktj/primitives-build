




module.exports=function(){
var hairlineWidth=1;
if(!global||!global.document||!global.document.body){
return hairlineWidth;
}
if(global.devicePixelRatio&&global.devicePixelRatio>=2){
var testElem=document.createElement('div');
testElem.style.border='.5px solid transparent';
document.body.appendChild(testElem);
if(testElem.offsetHeight===1){
hairlineWidth=0.5;
}
document.body.removeChild(testElem);
}
return hairlineWidth;
};