var express = require('express');
var fs = require("fs")
var filename = "index.html"
var app = express.createServer(express.logger());
var content = fs.readFileSync(filename)

app.get('/', function(request, response) {
  response.send(content.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
