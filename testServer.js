"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const restService = express();

var program = "";



restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());



function dataCreationAndAssignment(phase, variableName, equalsToCreation) {
  if (equalsToCreation != null) {
    return 'var ' + variableName + ' = ' + phase.split(equalsToCreation).pop() + ';';
  }
  return 'var ' + variableName + ' ;';
};


// Conditions is assumed to be an array
// list of variable names
function ifstatement (conditions, variablesNames ) {
  if (variablesNames.length == 1){
    return 'if ' + variableNames[0];
  }
  return 'if ' + variablesNames[0] + conditions [0] + variablesNames [1]; 
  
};


restService.post("/", function(req, res) {
  program = program.concat ('\n' + req.body.queryResult.queryText);

  if (speech=== "Seems like some problem. Speak again.") {
    return res.json({
      fulfillmentText: speech,
      //displayText: speech,
      source: "talk2code"
    });
  } 
  else {
      
    console.log("Intent:");
    console.log(req.body.queryResult.intent.displayName);
    //console.log();
    console.log("Query:");
    console.log(req.body.queryResult.queryText);
    console.log();

  if(intent === "dataCreationAndAssignment"){
    console.log("dataCreation");
    program = program + '\n' + dataCreationAndAssignment ( req.body.queryResult.queryText,  req.body.queryResult.parameters.variableName, req.body.queryResult.parameters.equalsTo_creation );
  } else if(intent ==="if statement"){
    console.log("if Statement");
  } else if(intent === "arithmetic"){
    console.log("arithmetic");
  }
  else if(intent === "End"){
    console.log("End");
    
    //create data assignment
    if (intent === "dataCreateAndAssignment") {
      console.log("dataCreation");
      program = program + '\n' + dataCreationAndAssignment(req.body.queryResult.queryText, req.body.queryResult.parameters.variableName, req.body.queryResult.parameters.equalsTo_creation);
    } 

    //if statement
    else if (intent === "if statement") {
      console.log("inside if statement:");
    } 

    //arithmetic
    else if (intent === "arithmetic") {
      console.log("arithmetic");
    } 
    
    //end
    else if (intent === "End") {
      console.log("End");
      //return program to the dialog flow
      return res.json({
        fulfillmentText: speech,
        //displayText: speech,
        source: "talk2code"
      });
    }

    //console.log (req.body.queryResult.parameters);
    //console.log("here"); 
    return res.json({

      fulfillmentText: speech,
      //displayText: speech,
      source: "talk2code"
    });
  }
});


restService.get("/", function (req, res) {
  res.send(program);
  return res;
});

restService.listen(process.env.PORT || 8000, function () {
  console.log("Server up and listening");
});