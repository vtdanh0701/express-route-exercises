var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send("You've reached the home route!");
});

// Add your routes below this line


// Add your routes above this line
app.listen(8000);
