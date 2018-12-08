var express = require ('expresss');
 
var app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res){
    res.send('Hello World');
});

app.listen(app.get('port'), function(){
    console.log('Express start on http://localhost' + app.get('port'));
});

/* //////////////////////*/

var express = require('express');
var config = require('./config/config');

var app = express();

var port = process.env.port || 3000

require('./config/express')(app, config);

require('http').createServer(app).listen(port, function () {
console.log("HTTP Server listening on port: %d, in %s mode", port, app.get('env'));
});

/*  /////////////////////  */

