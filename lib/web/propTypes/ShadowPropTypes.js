var PropTypes=require('prop-types');
var ColorPropType=require('./ColorPropType');


var ShadowPropTypes={
shadowColor:ColorPropType,
shadowOffset:PropTypes.shape({
width:PropTypes.number,
height:PropTypes.number}),

shadowOpacity:PropTypes.number,
shadowRadius:PropTypes.number};


module.exports=ShadowPropTypes;