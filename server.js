var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send("You've reached the home route!");
});

// Add your routes below this line
app.get('/parent', function(req,res){
  res.send("I am the parent");
})
app.get('/parent/son', function(req,res){
  res.send("I am the son");
})
app.get('/parent/daughter', function(req,res){
  res.send("I am the daughter")
})
app.get('/hello/:name', function(req,res){
  res.send("Hello " + req.params.name)
})
app.get('/hello/SEI', function(req, res){
  res.send("Welcome to SEI")
})
app.get('/:name/:thing', function(req,res){
  res.send("This is name : " + req.params.name + " This is thing : " + req.params.thing);
})
app.get("/console", function(req, res){
  console.log(req.query);
  res.send("done");
})

app.get("/color", function(req, res){
  var colorString = req.query.color;
  res.send("<h1 style=\"color: " + colorString + ";\">COLOR</h1>");
  // res.send(`<h1 style="color: ${colorString};">COLOR</h1>`);
})
// Add your routes above this line

app.get('/*', function(req,res){
  var myParams = req.params[0].split('/');
  var paramUpper = myParams.map(function(x,index){  
    if(index % 2 === 0){
      return x.toUpperCase();
    }  
    else{
      return x;
    }
  })
  var strParam = paramUpper.join(' ');
  res.send(strParam);
})

app.listen(8000);