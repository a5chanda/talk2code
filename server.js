"use strict";

const express = require("express");
const bodyParser = require("npm install body-parser --save");

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());

restService.post("/dataCreateAndAssignment", function(req, res) {
  var speech =
    req.body.result &&
    req.body.result.parameters &&
    req.body.result.parameters
      ? req.body.result.parameters
      : "Seems like some problem. Speak again.";
      Console.log (req.body.result.parameters); 
  return res.json({
    speech: speech,
    displayText: speech,
    source: "webhook-echo-sample"
  });
});

restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
