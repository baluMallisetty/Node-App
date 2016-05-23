var express = require('express');
var bodyParser = require('body-parser');
var app = express()
 
app.use(bodyParser.urlencoded({
  extended: true
}));

var routes = require('./routes.js')

//Sign up methods
app.get('/', function (req, res) {
  res.send('redirect')
});
 
app.post('/signup',routes.signup);



app.listen(3000)