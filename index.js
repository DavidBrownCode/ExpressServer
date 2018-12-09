/*var http = require('http');
var express = require('express');
var app = express();
app.set('port', process.env.PORT || 3000);

app.use(function(req,res,next){
    console.log('Request from ' + req.ip);
});

app.get('/',function(req,res){
    res.send('Hello World!');
});*/

/*-app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:' + app.get('port'));
});*/

/*html.createServer(app).listen(3000, function(){
    console.log('Express server listening on port ' + 3000);
});*/



/* //////////////////////

var express = require('express');
var config = require('./config');

var app = express();

var port = process.env.port || 3000

require('./express')(app, config);

require('http').createServer(app).listen(port, function () {
console.log("HTTP Server listening on port: %d, in %s mode", port, app.get('env'));
});

/*  /////////////////////  */

var express = require('express');
var config = require('./config/config');

var app = express();

var port = process.env.port || 3000

require('./config/express')(app, config);

require('http').createServer(app).listen(port, function () {
console.log("HTTP Server listening on port: %d, in %s mode", port, app.get('env'));
});