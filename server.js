"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());

restService.post("/dataCreateAndAssignment", function(req, res) {
  var speech =
    req.body.result && req.body.result.parameters && req.body.result.parameters ? 
    req.body.result.parameters: "Seems like some problem. Speak again.";
      console.log (req.body.result.parameters);
      console.log("here"); 
  return res.json({
    speech: speech,
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
