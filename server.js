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



restService.post("/dataCreateAndAssignment", function(req, res) {
  program = program.concat ('\n' + req.body.queryResult.queryText);
  console.log(req.body.queryResult.queryText);
  console.log("prog")
  console.log(program);


  var speech =
    req.body.queryResult && req.body.queryResult.parameters ? req.body.queryResult.parameters: "Seems like some problem. Speak again.";
    //console.log (req.body.queryResult.parameters);
    //console.log("here"); 
  return res.json({
    speech: req.body.queryResult,
    displayText: speech,
    source: "webhook-echo-sample"
  });
});


restService.get("/", function(req, res) {
  res.send(JSON.stringify({ a: 1 }));
  return res  
});

restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
