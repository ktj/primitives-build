var _=require('../');var _2=_interopRequireDefault(_);
var _initialStyles=require('../initialStyles');var _initialStyles2=_interopRequireDefault(_initialStyles);
var _testUtils=require('../test-utils');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var flushedCss=function flushedCss(){return(0,_testUtils.formatCss)(_2.default.getStyleSheetHtml());};

describe('Core Styles',function(){

beforeEach(function(){return _2.default.reset();});

it('Initial Styles match',function(){
(0,_initialStyles2.default)();
expect(flushedCss()).toMatchSnapshot();
});
});