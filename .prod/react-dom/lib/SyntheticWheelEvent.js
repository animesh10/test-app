"use strict";function SyntheticWheelEvent(e,t,n,l){return SyntheticMouseEvent.call(this,e,t,n,l)}var SyntheticMouseEvent=require("./SyntheticMouseEvent"),WheelEventInterface={deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:null,deltaMode:null};SyntheticMouseEvent.augmentClass(SyntheticWheelEvent,WheelEventInterface);module.exports=SyntheticWheelEvent;