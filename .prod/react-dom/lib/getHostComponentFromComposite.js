"use strict";function getHostComponentFromComposite(e){for(var o;(o=e._renderedNodeType)===ReactNodeTypes.COMPOSITE;){e=e._renderedComponent}return o===ReactNodeTypes.HOST?e._renderedComponent:o===ReactNodeTypes.EMPTY?null:void 0}var ReactNodeTypes=require("./ReactNodeTypes");module.exports=getHostComponentFromComposite;