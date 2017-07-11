var _normalizeValue=require('../normalizeValue');var _normalizeValue2=_interopRequireDefault(_normalizeValue);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

describe('normalizeValue',function(){
it('adds units for numbers w/ units',function(){
expect((0,_normalizeValue2.default)('width',20)).toEqual('20px');
});

it('keeps units for values w/ units',function(){
expect((0,_normalizeValue2.default)('width','20px')).toEqual('20px');
});

it('unitless numbers stay unitless',function(){
expect((0,_normalizeValue2.default)('opacity',0.5)).toEqual(0.5);
});
});