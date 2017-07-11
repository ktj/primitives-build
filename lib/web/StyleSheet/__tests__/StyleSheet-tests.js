var _=require('../');var _2=_interopRequireDefault(_);
var _testUtils=require('../test-utils');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var flushedCss=function flushedCss(){return(0,_testUtils.formatCss)(_2.default.getStyleSheetHtml());};
var registerStyle=function registerStyle(obj){return _2.default.create({foo:obj}).foo;};

describe('StyleSheet',function(){

beforeEach(function(){return _2.default.reset();});

describe('(Rendered CSS)',function(){
describe('pseudo styles',function(){
it('allows for pseudo-styles',function(){
_2.default.resolve(registerStyle({
width:30,
':hover':{
width:20}}));



expect(flushedCss()).toMatchSnapshot();
});
});
});

describe('.resolve(style)',function(){

describe('classNames and styles',function(){
it('uses classNames for registered styles',function(){
var styles=_2.default.resolve([
registerStyle({width:20}),
registerStyle({height:20})],
'coreClassName');

expect(styles).toMatchObject({
className:'coreClassName r12yvxpk rjz5agh1 ',
style:null});

});

it('uses classNames for registered styles and inline styles for objects',function(){
var styles=_2.default.resolve([
registerStyle({width:20}),
{height:20}],
'coreClassName');

expect(styles).toMatchObject({
className:'coreClassName r12yvxpk ',
style:{
height:'20px'}});


});

it('deopts to inline styles when needed',function(){
var styles=_2.default.resolve([
{height:20},
registerStyle({width:20})],
'coreClassName');

expect(styles).toMatchObject({
className:'coreClassName',
style:{
width:'20px',
height:'20px'}});


});

it('identical styles result in a single class',function(){
var a=_2.default.resolve(registerStyle({height:20}),'coreClassName');
var b=_2.default.resolve(registerStyle({height:20}),'coreClassName');

expect(a).toMatchObject(b);
});
});

describe('transform styles',function(){





it('merges transforms together',function(){
var styles=_2.default.resolve([
{
transform:[
{translateX:20}]},


{
transform:[
{rotateX:'20deg'}]}],


'coreClassName');

expect(styles).toMatchObject({
className:'coreClassName',
style:{
WebkitTransform:'translateX(20px) rotateX(20deg)',
msTransform:'translateX(20px) rotateX(20deg)',
transform:'translateX(20px) rotateX(20deg)'}});


});

it('honors the correct order (1)',function(){
var styles=_2.default.resolve([
{
transform:[
{translateX:20},
{rotateX:'20deg'}]}],


'coreClassName');

expect(styles).toMatchObject({
className:'coreClassName',
style:{
WebkitTransform:'translateX(20px) rotateX(20deg)',
msTransform:'translateX(20px) rotateX(20deg)',
transform:'translateX(20px) rotateX(20deg)'}});


});

it('honors the correct order (2)',function(){
var styles=_2.default.resolve([
{
transform:[
{rotateX:'20deg'},
{translateX:20}]}],


'coreClassName');

expect(styles).toMatchObject({
className:'coreClassName',
style:{
WebkitTransform:'rotateX(20deg) translateX(20px)',
msTransform:'rotateX(20deg) translateX(20px)',
transform:'rotateX(20deg) translateX(20px)'}});


});
});

describe('expanded / shorthand props',function(){

it('expands individual props',function(){
var styles=_2.default.resolve([
{padding:20},
{paddingTop:0}],
'coreClassName');

expect(styles).toMatchObject({
className:'coreClassName',
style:{
paddingBottom:'20px',
paddingLeft:'20px',
paddingRight:'20px',
paddingTop:'0px'}});


});

it('expands shorthands props',function(){
var styles=_2.default.resolve([
{padding:20},
{paddingHorizontal:0}],
'coreClassName');

expect(styles).toMatchObject({
className:'coreClassName',
style:{
paddingBottom:'20px',
paddingLeft:'0px',
paddingRight:'0px',
paddingTop:'20px'}});


});
});

describe('positional classes',function(){

it('classNames are applied based on the style array position',function(){
var a=registerStyle({width:1});
var b=registerStyle({width:2});
var c=registerStyle({width:3});
var d=registerStyle({width:4});

var test=function test(s,v){return expect(_2.default.resolve(s,'core').className).toMatch(v);};

test([a,b,c,d],'core rtkgqor r1wol5js1 r1oe826x2 rnazxpa3 ');
test([a,[b,c],d],'core rtkgqor r1wol5js1 r1oe826x2 rnazxpa3 ');
test([a,[b,[c]],d],'core rtkgqor r1wol5js1 r1oe826x2 rnazxpa3 ');
test([a,[],[b,[c]],d],'core rtkgqor r1wol5js1 r1oe826x2 rnazxpa3 ');
test([a,[b],[[c]],d],'core rtkgqor r1wol5js1 r1oe826x2 rnazxpa3 ');
test([a,c,b,d],'core rtkgqor r1oe826x1 r1wol5js2 rnazxpa3 ');
test([false,false,false,d],'core rnazxpa3 ');
test([false,false,d,false],'core rnazxpa2 ');
test([d,false,false,false],'core rnazxpa ');
});

it('does not flush styles before they are used',function(){
registerStyle({width:1});
expect(flushedCss()).toMatchSnapshot();
});

it('flushes styles when they are used',function(){
var style=registerStyle({width:1});
_2.default.resolve(style,'coreClassName');
expect(flushedCss()).toMatchSnapshot();
});

it('uses compound selectors when styles are applied at a certain index',function(){
var style=registerStyle({width:1});
_2.default.resolve([false,style],'coreClassName');
expect(flushedCss()).toMatchSnapshot();
});

});











});
});