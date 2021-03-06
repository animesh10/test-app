"use strict";var ReactTypeOfWork=require("./ReactTypeOfWork"),ClassComponent=ReactTypeOfWork.ClassComponent,HostContainer=ReactTypeOfWork.HostContainer,HostComponent=ReactTypeOfWork.HostComponent,_require=require("./ReactFiberUpdateQueue"),callCallbacks=_require.callCallbacks;module.exports=function(e){function t(e,t){switch(t.tag){case ClassComponent:t.alternate&&(t.alternate.updateQueue=null);if(t.callbackList){var r=t.callbackList;t.callbackList=null;callCallbacks(r,t.stateNode)}return;case HostContainer:var n=t.output,s=t.stateNode,l=s.containerInfo;o(l,n);return;case HostComponent:if(null==t.stateNode||!e){throw new Error("This should only be done during updates.")}var i=t.child,u=i&&!i.sibling?i.output:i,c=t.memoizedProps,p=e.memoizedProps,d=t.stateNode;a(d,p,c,u);return;default:throw new Error("This unit of work tag should not have side-effects.")}}var o=e.updateContainer,a=e.commitUpdate;return{commitWork:t}};