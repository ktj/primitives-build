var _jsxFileName='src/web/View/__tests__/View-tests.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactTestRenderer=require('react-test-renderer');var _reactTestRenderer2=_interopRequireDefault(_reactTestRenderer);
var _View=require('../View');var _View2=_interopRequireDefault(_View);
var _StyleSheet=require('../../StyleSheet');var _StyleSheet2=_interopRequireDefault(_StyleSheet);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

describe('<View />',function(){
it('empty with no children',function(){
expect(_reactTestRenderer2.default.create(
_react2.default.createElement(_View2.default,{__source:{fileName:_jsxFileName,lineNumber:9}}))).
toMatchSnapshot();
});

it('empty with children',function(){
expect(_reactTestRenderer2.default.create(
_react2.default.createElement(_View2.default,{__source:{fileName:_jsxFileName,lineNumber:15}},
_react2.default.createElement(_View2.default,{__source:{fileName:_jsxFileName,lineNumber:16}})))).

toMatchSnapshot();
});

it('with single registered style',function(){
var styles=_StyleSheet2.default.create({
foo:{
width:20,
height:20}});


expect(_reactTestRenderer2.default.create(
_react2.default.createElement(_View2.default,{
style:styles.foo,__source:{fileName:_jsxFileName,lineNumber:29}}))).

toMatchSnapshot();
});

it('with single inline style',function(){
expect(_reactTestRenderer2.default.create(
_react2.default.createElement(_View2.default,{
style:{
width:20,
height:20},__source:{fileName:_jsxFileName,lineNumber:37}},'Hello World!'))).




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
_react2.default.createElement(_View2.default,{
style:[
styles.foo,
styles.bar,
{opacity:0.5}],__source:{fileName:_jsxFileName,lineNumber:59}}))).


toMatchSnapshot();
});

it('with a11y props',function(){
expect(_reactTestRenderer2.default.create(
_react2.default.createElement(_View2.default,{
style:{
width:20,
height:20},

accessibilityLabel:'Label',
accessible:true,__source:{fileName:_jsxFileName,lineNumber:71}},'Hello World!'))).



toMatchSnapshot();
});

it('with a11y role',function(){
expect(_reactTestRenderer2.default.create(
_react2.default.createElement(_View2.default,{
style:{
width:20,
height:20},

accessibilityRole:'button',__source:{fileName:_jsxFileName,lineNumber:86}},'Hello World!'))).



toMatchSnapshot();
});
});