var _transformToWebStyle=require('../transformToWebStyle');var _transformToWebStyle2=_interopRequireDefault(_transformToWebStyle);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

describe('transformToWebStyle',function(){




it('standard props',function(){
expect((0,_transformToWebStyle2.default)({
width:20,
height:20})).
toMatchSnapshot();
});

it('expanded props',function(){
expect((0,_transformToWebStyle2.default)({
padding:20,
margin:20})).
toMatchSnapshot();
});

it('flex 1',function(){
expect((0,_transformToWebStyle2.default)({
flex:1})).
toMatchSnapshot();
});

it('flex 0',function(){
expect((0,_transformToWebStyle2.default)({
flex:0})).
toMatchSnapshot();
});

it('flexbox properties',function(){
expect((0,_transformToWebStyle2.default)({
flexDirection:'row',
justifyContent:'center',
alignItems:'center'})).
toMatchSnapshot();
});

describe('transform',function(){
it('translateX',function(){
expect((0,_transformToWebStyle2.default)({
transform:[
{translateX:20}]})).

toMatchSnapshot();
});

it('rotateX',function(){
expect((0,_transformToWebStyle2.default)({
transform:[
{rotateX:'30deg'}]})).

toMatchSnapshot();
});

it('multiple',function(){
expect((0,_transformToWebStyle2.default)({
transform:[
{translateX:20},
{rotateX:'30deg'}]})).

toMatchSnapshot();
});
});

describe('expandable props',function(){
it('paddingHorizontal',function(){
expect((0,_transformToWebStyle2.default)({
paddingHorizontal:10})).
toMatchSnapshot();
});
it('paddingVertical',function(){
expect((0,_transformToWebStyle2.default)({
paddingVertical:10})).
toMatchSnapshot();
});
it('padding',function(){
expect((0,_transformToWebStyle2.default)({
padding:10})).
toMatchSnapshot();
});
it('marginHorizontal',function(){
expect((0,_transformToWebStyle2.default)({
marginHorizontal:10})).
toMatchSnapshot();
});
it('marginVertical',function(){
expect((0,_transformToWebStyle2.default)({
marginVertical:10})).
toMatchSnapshot();
});
it('margin',function(){
expect((0,_transformToWebStyle2.default)({
margin:10})).
toMatchSnapshot();
});
it('borderWidth',function(){
expect((0,_transformToWebStyle2.default)({
borderWidth:10})).
toMatchSnapshot();
});
it('borderStyle',function(){
expect((0,_transformToWebStyle2.default)({
borderStyle:'solid'})).
toMatchSnapshot();
});
it('borderColor',function(){
expect((0,_transformToWebStyle2.default)({
borderColor:'#333'})).
toMatchSnapshot();
});
it('borderRadius',function(){
expect((0,_transformToWebStyle2.default)({
borderRadius:10})).
toMatchSnapshot();
});
});

describe('colors',function(){
it('named',function(){
expect((0,_transformToWebStyle2.default)({
color:'blue'})).
toMatchSnapshot();
});

it('rgb(...)',function(){
expect((0,_transformToWebStyle2.default)({
color:'rgb(10, 10, 10)'})).
toMatchSnapshot();
});

it('rgba(...)',function(){
expect((0,_transformToWebStyle2.default)({
color:'rgba(10, 10, 10, 0.5)'})).
toMatchSnapshot();
});

it('short hex',function(){
expect((0,_transformToWebStyle2.default)({
color:'#fff'})).
toMatchSnapshot();
});

it('normal hex',function(){
expect((0,_transformToWebStyle2.default)({
color:'#fefefe'})).
toMatchSnapshot();
});

it('long hex',function(){
expect((0,_transformToWebStyle2.default)({
color:'fefefefe'})).
toMatchSnapshot();
});
});

describe('boxShadow',function(){
it('shadow 1',function(){
expect((0,_transformToWebStyle2.default)({
shadowColor:'#000',
shadowOpacity:0.5,
shadowRadius:5,
shadowOffset:{
width:1,
height:1}})).

toMatchSnapshot();
});

it('shadow 2',function(){
expect((0,_transformToWebStyle2.default)({
shadowColor:'#000',
shadowRadius:5,
shadowOffset:{
width:1,
height:1}})).

toMatchSnapshot();
});

it('shadow 3',function(){
expect((0,_transformToWebStyle2.default)({
shadowColor:'#000',
shadowOpacity:0.5,
shadowRadius:5})).
toMatchSnapshot();
});
});

});