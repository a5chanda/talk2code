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



restService.post("/", function(req, res) {
  program = program.concat ('\n' + req.body.queryResult.queryText);

  console.log(req.body.queryResult.queryText);
  console.log("Intent");
  console.log(req.body.queryResult.intent.displayName);
  console.log("prog")
  console.log(program);
  let intent = req.body.queryResult.intent.displayName

  if(intent === "dataCreationAndAssignment"){
    console.log("dataCreation");
  } else if(intent ==="if statement"){
    console.log("if");
  } else if(intent === "arithmetic"){
    console.log("arithmetic");
  }


  var speech = req.body.queryResult && req.body.queryResult.parameters ? 
              req.body.queryResult.queryText: "Seems like some problem. Speak again.";
    //console.log (req.body.queryResult.parameters);
    //console.log("here"); 
  return res.json({
    speech: speech,
    displayText: speech,
    //source: "talk2code"
  });
});


restService.get("/", function(req, res) {
  res.send(program);
  return res;  
});

restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
