/*var express = require ('expresss');
var morgan = require('morgan');

module.exports = function (app, config){
    app.use(function (req,res, next){
        console.log('Request from ' + req.connection.remoteAddress);
        next();
    
    });

    app.use(morgan('dev'));

    app.use(express.static(config.root + '/public'));

    app.use(function (req, res){
        res.type('text/plan');
        res.status(404);

    });
};*/
/*var app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res){
    res.send('Hello World');
});

app.listen(app.get('port'), function(){
    console.log('Express start on http://localhost' + app.get('port'));
});*/

//requires
var express = require('express');
var morgan = require('morgan');
var logger = require('./logger');
var bodyParser = require('body-parser');
var glob = require('glob');
var bluebird = require('bluebird');
var mongoose = require('mongoose');

//add in after testing
var cors = require('cors');

module.exports = function (app, config) {
//older code    
/*app.use(function (req, res, next) {
console.log('Request from ' + req.connection.remoteAddress);
next();
});
app.use(morgan('dev'));*/

    logger.log('info', "Loading Mongoose functionality");
    mongoose.Promise = bluebird;
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', function () {
        throw new Error('unable to connect to database at ' + config.db);
    });
    app.use(body-parser.json());
    app.use(express.static(config.root + '/public'));
    app.use(function (req, res) {
        res.type('text/plan');
        res.status(404);
        res.send('404 Not Found');
    });

    app.use(function (err, req, res, next) {
        console.log(err)
        if (process.env.NODE_ENV !== 'test') logger.log(err.stack,'error');
        res.type('text/plan');
        if(err.status){
        res.status(err.status).send(err.message);
        } else {
        res.status(500).send('500 Sever Error');
        }
        });
//changed in authenication/refine the error... from below
   
/*app.use(function (err, req, res, next) {
        console.error(err.stack);
        res.type('text/plan');
        if(err.status){
            res.status(err.status).send(err.message);
    }
    res.status(500);
    res.send('500 Sever Error');
    });
    console.log("Starting application");
};

These are separate notes---------

var express = require('express');
var app = express();
app.set('port', process.env.PORT || 3000);
app.get('/',function(req,res){
res.send('Hello World!');
});
app.listen(app.get('port'), function(){
console.log('Express started on http://localhost:' + app.get('port'));
});

*/