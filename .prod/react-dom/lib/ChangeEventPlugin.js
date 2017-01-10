"use strict";function shouldUseChangeEvent(e){var t=e.nodeName&&e.nodeName.toLowerCase();return"select"===t||"input"===t&&"file"===e.type}function manualDispatchChangeEvent(e){var t=SyntheticEvent.getPooled(eventTypes.change,activeElementInst,e,getEventTarget(e));EventPropagators.accumulateTwoPhaseDispatches(t);ReactUpdates.batchedUpdates(runEventInBatch,t)}function runEventInBatch(e){EventPluginHub.enqueueEvents(e);EventPluginHub.processEventQueue(!1)}function startWatchingForChangeEventIE8(e,t){activeElement=e;activeElementInst=t;activeElement.attachEvent("onchange",manualDispatchChangeEvent)}function stopWatchingForChangeEventIE8(){if(activeElement){activeElement.detachEvent("onchange",manualDispatchChangeEvent);activeElement=null;activeElementInst=null}}function getTargetInstForChangeEvent(e,t){if("topChange"===e){return t}}function handleEventsForChangeEventIE8(e,t,n){if("topFocus"===e){stopWatchingForChangeEventIE8();startWatchingForChangeEventIE8(t,n)}else{"topBlur"===e&&stopWatchingForChangeEventIE8()}}function startWatchingForValueChange(e,t){activeElement=e;activeElementInst=t;activeElementValue=e.value;activeElementValueProp=Object.getOwnPropertyDescriptor(e.constructor.prototype,"value");Object.defineProperty(activeElement,"value",newValueProp);activeElement.attachEvent?activeElement.attachEvent("onpropertychange",handlePropertyChange):activeElement.addEventListener("propertychange",handlePropertyChange,!1)}function stopWatchingForValueChange(){if(activeElement){delete activeElement.value;activeElement.detachEvent?activeElement.detachEvent("onpropertychange",handlePropertyChange):activeElement.removeEventListener("propertychange",handlePropertyChange,!1);activeElement=null;activeElementInst=null;activeElementValue=null;activeElementValueProp=null}}function handlePropertyChange(e){if("value"===e.propertyName){var t=e.srcElement.value;if(t!==activeElementValue){activeElementValue=t;manualDispatchChangeEvent(e)}}}function getTargetInstForInputEvent(e,t){if("topInput"===e){return t}}function handleEventsForInputEventIE(e,t,n){if("topFocus"===e){stopWatchingForValueChange();startWatchingForValueChange(t,n)}else{"topBlur"===e&&stopWatchingForValueChange()}}function getTargetInstForInputEventIE(e,t){if(("topSelectionChange"===e||"topKeyUp"===e||"topKeyDown"===e)&&activeElement&&activeElement.value!==activeElementValue){activeElementValue=activeElement.value;return activeElementInst}}function shouldUseClickEvent(e){return e.nodeName&&"input"===e.nodeName.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)}function getTargetInstForClickEvent(e,t){if("topClick"===e){return t}}var EventPluginHub=require("./EventPluginHub"),EventPropagators=require("./EventPropagators"),ExecutionEnvironment=require("fbjs/lib/ExecutionEnvironment"),ReactDOMComponentTree=require("./ReactDOMComponentTree"),ReactUpdates=require("./ReactUpdates"),SyntheticEvent=require("./SyntheticEvent"),getEventTarget=require("./getEventTarget"),isEventSupported=require("./isEventSupported"),isTextInputElement=require("./isTextInputElement"),eventTypes={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:["topBlur","topChange","topClick","topFocus","topInput","topKeyDown","topKeyUp","topSelectionChange"]}},activeElement=null,activeElementInst=null,activeElementValue=null,activeElementValueProp=null,doesChangeEventBubble=!1;ExecutionEnvironment.canUseDOM&&(doesChangeEventBubble=isEventSupported("change")&&(!document.documentMode||document.documentMode>8));var isInputEventSupported=!1;ExecutionEnvironment.canUseDOM&&(isInputEventSupported=isEventSupported("input")&&(!document.documentMode||document.documentMode>11));var newValueProp={get:function(){return activeElementValueProp.get.call(this)},set:function(e){activeElementValue=""+e;activeElementValueProp.set.call(this,e)}},ChangeEventPlugin={eventTypes:eventTypes,extractEvents:function(e,t,n,a){var o,r,u=t?ReactDOMComponentTree.getNodeFromInstance(t):window;if(shouldUseChangeEvent(u)){doesChangeEventBubble?o=getTargetInstForChangeEvent:r=handleEventsForChangeEventIE8}else{if(isTextInputElement(u)){if(isInputEventSupported){o=getTargetInstForInputEvent}else{o=getTargetInstForInputEventIE;r=handleEventsForInputEventIE}}else{shouldUseClickEvent(u)&&(o=getTargetInstForClickEvent)}}if(o){var i=o(e,t);if(i){var c=SyntheticEvent.getPooled(eventTypes.change,i,n,a);c.type="change";EventPropagators.accumulateTwoPhaseDispatches(c);return c}}r&&r(e,u,t)}};module.exports=ChangeEventPlugin;