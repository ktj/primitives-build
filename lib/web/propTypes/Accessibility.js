var PropTypes=require('prop-types');

var Components={
article:'article',
banner:'header',
button:'button',
complementary:'aside',
contentinfo:'footer',
form:'form',
heading:'h1',
img:'div',
link:'a',
list:'ul',
listitem:'li',
main:'main',
navigation:'nav',
region:'section'};


var RolePropType=PropTypes.oneOf(Object.keys(Components));
var LiveRegionPropType=PropTypes.oneOf([
'assertive',
'off',
'polite']);


module.exports={
RolePropType:RolePropType,
LiveRegionPropType:LiveRegionPropType,
Components:Components};