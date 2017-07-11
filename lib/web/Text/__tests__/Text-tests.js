var _jsxFileName='src/web/Text/__tests__/Text-tests.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactTestRenderer=require('react-test-renderer');var _reactTestRenderer2=_interopRequireDefault(_reactTestRenderer);
var _Text=require('../Text');var _Text2=_interopRequireDefault(_Text);
var _StyleSheet=require('../../StyleSheet');var _StyleSheet2=_interopRequireDefault(_StyleSheet);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

describe('<Text />',function(){
it('empty with no children',function(){
expect(_reactTestRenderer2.default.create(
_react2.default.createElement(_Text2.default,{__source:{fileName:_jsxFileName,lineNumber:9}}))).
toMatchSnapshot();
});

it('empty with children',function(){
expect(_reactTestRenderer2.default.create(
_react2.default.createElement(_Text2.default,{__source:{fileName:_jsxFileName,lineNumber:15}},'Hello World!'))).


toMatchSnapshot();
});

it('empty with multiple children',function(){
expect(_reactTestRenderer2.default.create(
_react2.default.createElement(_Text2.default,{__source:{fileName:_jsxFileName,lineNumber:23}},
'Hello ',
' World'))).

toMatchSnapshot();
});


it('nested Text',function(){
expect(_reactTestRenderer2.default.create(
_react2.default.createElement(_Text2.default,{__source:{fileName:_jsxFileName,lineNumber:33}},
_react2.default.createElement(_Text2.default,{__source:{fileName:_jsxFileName,lineNumber:34}},'Hello'),
_react2.default.createElement(_Text2.default,{__source:{fileName:_jsxFileName,lineNumber:35}},'World')))).

toMatchSnapshot();
});

it('nested Text different depth',function(){
expect(_reactTestRenderer2.default.create(
_react2.default.createElement(_Text2.default,{__source:{fileName:_jsxFileName,lineNumber:42}},
_react2.default.createElement(_Text2.default,{__source:{fileName:_jsxFileName,lineNumber:43}},'Hello'),'World'))).


toMatchSnapshot();
});

it('with single registered style',function(){
var styles=_StyleSheet2.default.create({
foo:{
width:20,
height:20},

bar:{
backgroundColor:'red'}});


expect(_reactTestRenderer2.default.create(
_react2.default.createElement(_Text2.default,{style:styles.foo,__source:{fileName:_jsxFileName,lineNumber:60}},'Hello World!'))).


toMatchSnapshot();
});

it('with single inline style',function(){
expect(_reactTestRenderer2.default.create(
_react2.default.createElement(_Text2.default,{
style:{
width:20,
height:20},__source:{fileName:_jsxFileName,lineNumber:68}},'Hello World!'))).




toMatchSnapshot();
});

it('with multiple styles and some inline',function(){
var styles=_StyleSheet2.default.create({
foo:{
width:20,
height:20},

bar:{
backgroundColor:'red'}});


expect(_reactTestRenderer2.default.create(
_react2.default.createElement(_Text2.default,{
style:[
styles.foo,
styles.bar,
{opacity:0.5}],__source:{fileName:_jsxFileName,lineNumber:90}},'Hello World!'))).




toMatchSnapshot();
});

it('with a11y props',function(){
expect(_reactTestRenderer2.default.create(
_react2.default.createElement(_Text2.default,{
style:{
width:20,
height:20},

accessibilityLabel:'Label',
accessible:true,__source:{fileName:_jsxFileName,lineNumber:104}},'Hello World!'))).



toMatchSnapshot();
});
});