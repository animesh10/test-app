"use strict";function modifierStateGetter(t){var e=this,r=e.nativeEvent;if(r.getModifierState){return r.getModifierState(t)}var i=modifierKeyToProp[t];return!!i&&!!r[i]}function getEventModifierState(t){return modifierStateGetter}var modifierKeyToProp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};module.exports=getEventModifierState;