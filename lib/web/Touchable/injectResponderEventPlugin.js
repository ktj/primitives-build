



var EventConstants=require('react-dom/lib/EventConstants');
var EventPluginRegistry=require('react-dom/lib/EventPluginRegistry');
var ResponderEventPlugin=require('react-dom/lib/ResponderEventPlugin');
var ResponderTouchHistoryStore=require('react-dom/lib/ResponderTouchHistoryStore');
var normalizeNativeEvent=require('./normalizeNativeEvent');
var keyMirror=require('../util/keyMirror');var _keyMirror=











keyMirror(EventConstants.topLevelTypes),topMouseDown=_keyMirror.topMouseDown,topMouseMove=_keyMirror.topMouseMove,topMouseUp=_keyMirror.topMouseUp,topScroll=_keyMirror.topScroll,topSelectionChange=_keyMirror.topSelectionChange,topTouchCancel=_keyMirror.topTouchCancel,topTouchEnd=_keyMirror.topTouchEnd,topTouchMove=_keyMirror.topTouchMove,topTouchStart=_keyMirror.topTouchStart;

var endDependencies=[topTouchCancel,topTouchEnd,topMouseUp];
var moveDependencies=[topTouchMove,topMouseMove];
var startDependencies=[topTouchStart,topMouseDown];




ResponderEventPlugin.eventTypes.responderMove.dependencies=moveDependencies;
ResponderEventPlugin.eventTypes.responderEnd.dependencies=endDependencies;
ResponderEventPlugin.eventTypes.responderStart.dependencies=startDependencies;
ResponderEventPlugin.eventTypes.responderRelease.dependencies=endDependencies;
ResponderEventPlugin.eventTypes.responderTerminationRequest.dependencies=[];
ResponderEventPlugin.eventTypes.responderGrant.dependencies=[];
ResponderEventPlugin.eventTypes.responderReject.dependencies=[];
ResponderEventPlugin.eventTypes.responderTerminate.dependencies=[];
ResponderEventPlugin.eventTypes.moveShouldSetResponder.dependencies=moveDependencies;
ResponderEventPlugin.eventTypes.selectionChangeShouldSetResponder.dependencies=[topSelectionChange];
ResponderEventPlugin.eventTypes.scrollShouldSetResponder.dependencies=[topScroll];
ResponderEventPlugin.eventTypes.startShouldSetResponder.dependencies=startDependencies;

var originalRecordTouchTrack=ResponderTouchHistoryStore.recordTouchTrack;

ResponderTouchHistoryStore.recordTouchTrack=function(topLevelType,nativeEvent){

if(topLevelType===topMouseMove&&!ResponderTouchHistoryStore.touchHistory.touchBank.length){
return;
}
originalRecordTouchTrack.call(ResponderTouchHistoryStore,topLevelType,normalizeNativeEvent(nativeEvent));
};

EventPluginRegistry.injectEventPluginsByName({
ResponderEventPlugin:ResponderEventPlugin});