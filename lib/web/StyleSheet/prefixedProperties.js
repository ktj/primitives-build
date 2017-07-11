module.exports=[












'perspective',
'perspectiveOrigin',
'transform',
'transformOrigin',
'transformStyle',
'transformOriginX',
'transformOriginY',
'transformOriginZ',
'backgroundClip',
'backgroundOrigin',
'backgroundSize',






'borderRadius',

'boxShadow',
'boxSizing',














'filter',
'flex',
'flexBasis',
'flexDirection',
'flexGrow',
'flexFlow',
'flexShrink',
'flexWrap',
'alignContent',
'alignItems',
'alignSelf',
'justifyContent',
'order',







'fontKerning',















































'textAlignLast',
'textDecorationStyle',
'textDecorationSkip',
'textDecorationLine',
'textDecorationColor',




'textOverflow',
'textSizeAdjust',






'userSelect'].



reduce(function(acc,key){

acc[key]=true;
return acc;
},{});