"use strict";var DOMChildrenOperations=require("./DOMChildrenOperations"),ReactDOMIDOperations=require("./ReactDOMIDOperations"),ReactComponentBrowserEnvironment={processChildrenUpdates:ReactDOMIDOperations.dangerouslyProcessChildrenUpdates,replaceNodeWithMarkup:DOMChildrenOperations.dangerouslyReplaceNodeWithMarkup};module.exports=ReactComponentBrowserEnvironment;