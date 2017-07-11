var PropTypes=require('prop-types');
var ColorPropType=require('./ColorPropType');

var numberOrString=PropTypes.oneOfType([PropTypes.number,PropTypes.string]);
var BorderStylePropType=PropTypes.oneOf(['solid','dotted','dashed']);

var BorderPropTypes={
borderColor:ColorPropType,
borderTopColor:ColorPropType,
borderRightColor:ColorPropType,
borderBottomColor:ColorPropType,
borderLeftColor:ColorPropType,
borderRadius:numberOrString,
borderTopLeftRadius:numberOrString,
borderTopRightRadius:numberOrString,
borderBottomLeftRadius:numberOrString,
borderBottomRightRadius:numberOrString,
borderStyle:BorderStylePropType,
borderTopStyle:BorderStylePropType,
borderRightStyle:BorderStylePropType,
borderBottomStyle:BorderStylePropType,
borderLeftStyle:BorderStylePropType};


module.exports=BorderPropTypes;