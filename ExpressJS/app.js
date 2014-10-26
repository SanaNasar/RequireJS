var express = require('express');
var ejs = require('ejs');
var app = express();

// app.engine("html", ejs.renderFile);
app.set("view engine", "ejs");
app.use(express.static(_dirname + "/app"));

app.get('/', function (req, res) {
  res.render("index.html", ());

  // res.send('Hello World!');
});

// starting a server and listening on port 3000
app.listen("3000", function(){
  console.log("Server running on 3000!");
});

// var server = app.listen(3000, function () {

//   var host = server.address().address;
//   var port = server.address().port;

//   console.log('Example app listening at http://%s:%s', host, port);

// });