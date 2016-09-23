//Dependencies
var express = require('express');
var path = require('path');

var app = express();


//set view engine

app.use(express.static(__dirname, + '/client'));
app.set('view engine', 'ejs');




//Routes

app.get('/', function(req, res) {
  
  res.render('index.ejs');
  
});

//Initialize Server

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
 
  console.log("Running ya bish");
});
