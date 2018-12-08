var express = require ('expresss');
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
};
/*var app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res){
    res.send('Hello World');
});

app.listen(app.get('port'), function(){
    console.log('Express start on http://localhost' + app.get('port'));
});*/

var express = require('express');
module.exports = function (app, config) {
app.use(function (req, res, next) {
console.log('Request from ' + req.connection.remoteAddress);
next();
});

app.use(express.static(config.root + '/public'));
app.use(function (req, res) {
res.type('text/plan');
res.status(404);
res.send('404 Not Found');
});
app.use(function (err, req, res, next) {
console.error(err.stack);
res.type('text/plan');
res.status(500);
res.send('500 Sever Error');
});
console.log("Starting application");
};