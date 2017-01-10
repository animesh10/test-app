"use strict";function roundFloat(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,e=Math.pow(10,t);return Math.floor(n*e)/e}function consoleTable(n){console.table(n)}function warnInProduction(){if(!alreadyWarned){alreadyWarned=!0;"undefined"!=typeof console&&console.error("ReactPerf is not supported in the production builds of React. To collect measurements, please use the development build of React instead.")}}function getLastMeasurements(){warnInProduction();return[]}function getExclusive(){arguments.length>0&&void 0!==arguments[0]?arguments[0]:getLastMeasurements();warnInProduction();return[]}function getInclusive(){arguments.length>0&&void 0!==arguments[0]?arguments[0]:getLastMeasurements();warnInProduction();return[]}function getWasted(){arguments.length>0&&void 0!==arguments[0]?arguments[0]:getLastMeasurements();warnInProduction();return[]}function getOperations(){arguments.length>0&&void 0!==arguments[0]?arguments[0]:getLastMeasurements();warnInProduction();return[]}function printExclusive(n){warnInProduction();return}function printInclusive(n){warnInProduction();return}function printWasted(n){warnInProduction();return}function printOperations(n){warnInProduction();return}function printDOM(n){warnedAboutPrintDOM=!0;return printOperations(n)}function getMeasurementsSummaryMap(n){warnedAboutGetMeasurementsSummaryMap=!0;return getWasted(n)}function start(){warnInProduction()}function stop(){warnInProduction()}function isRunning(){warnInProduction();return!1}var _assign=require("object-assign"),_extends=_assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e){Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}}return n},ReactDebugTool=require("./ReactDebugTool"),warning=require("fbjs/lib/warning"),alreadyWarned=!1,warnedAboutPrintDOM=!1,warnedAboutGetMeasurementsSummaryMap=!1,ReactPerfAnalysis={getLastMeasurements:getLastMeasurements,getExclusive:getExclusive,getInclusive:getInclusive,getWasted:getWasted,getOperations:getOperations,printExclusive:printExclusive,printInclusive:printInclusive,printWasted:printWasted,printOperations:printOperations,start:start,stop:stop,isRunning:isRunning,printDOM:printDOM,getMeasurementsSummaryMap:getMeasurementsSummaryMap};module.exports=ReactPerfAnalysis;