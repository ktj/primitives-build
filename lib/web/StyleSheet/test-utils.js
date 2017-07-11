var addNewlines=function addNewlines(str){return str.replace(/([;{,])/g,'$1\n');};
var addNewline=function addNewline(str){return str.replace(/([{])/g,'\n$1');};
var stripWhiteSpace=function stripWhiteSpace(str){return str.replace(/\n\s*/g,'\n').replace(/^\n/,'');};
var stripNewlines=function stripNewlines(str){return str.replace(/\n/,'');};
var stripHtml=function stripHtml(str){return str.replace(/(<([^>]+)>)/ig,'');};
var formatCss=function formatCss(str){return addNewline(addNewlines(stripHtml(str)));};

module.exports={
formatCss:formatCss,
addNewlines:addNewlines,
stripWhiteSpace:stripWhiteSpace,
stripHtml:stripHtml,
stripNewlines:stripNewlines};