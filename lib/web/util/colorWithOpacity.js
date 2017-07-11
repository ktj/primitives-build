var _normalizeCssColor=require('normalize-css-color');var _normalizeCssColor2=_interopRequireDefault(_normalizeCssColor);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var colorWithOpacity=function colorWithOpacity(input,opacity){
var nullableColor=(0,_normalizeCssColor2.default)(input);
var colorInt=nullableColor===null?0x00000000:nullableColor;var _normalizeColor$rgba=
_normalizeCssColor2.default.rgba(colorInt),r=_normalizeColor$rgba.r,g=_normalizeColor$rgba.g,b=_normalizeColor$rgba.b,a=_normalizeColor$rgba.a;

return'rgba('+r+','+g+','+b+','+a*opacity+')';
};

module.exports=colorWithOpacity;