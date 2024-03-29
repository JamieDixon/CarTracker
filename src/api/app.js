var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes');
var users = require('./routes/user');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    Journey.find(function (err, journeys) {
        res.json(journeys);
    });
});

app.post('/', function (req, res) {
    var journey = new Journey(req.body);
    journey.save(function (err) {
        if(err)
        {
            console.log(err);
        }
    });

    res.json(journey);
});


/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.render('error', {
        message: err.message,
        error: {}
    });
});

var port = parseInt(process.env.PORT) || 8080;
app.listen(port);

console.log("The magic happens on port %d", port);

var mongoose = require("mongoose");
mongoose.connect("mongodb://webApp:letmein123@ds050077.mongolab.com:50077/CarTrackerMongoLab");

var Journey = require("./models/journey-model");

module.exports = app;
