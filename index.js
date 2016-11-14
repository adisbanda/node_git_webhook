var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

app.use(bodyParser.json())

app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  if(req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT,POST,DELETE");
    return res.status(200).json({});
  }
  next();
});

app.get('/', function(req, res) {
  console.log('Connected GET');
  res.send('Connected GET');
});

app.post('/', function(req, res) {
  console.log(req.body);
  res.send(req.body);
});

app.listen(port, function(){
  console.log('Webhook server listening on port', port);
});
