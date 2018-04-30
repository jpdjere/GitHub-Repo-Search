var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

/*--------------- ROUTING FOR REACT on PRODUCTION ------------------*/
// Priority serve any static files.
app.use(express.static(path.join(__dirname, 'client/build')));
/*--------------- ROUTING FOR REACT on PRODUCTION ------------------*/

app.use('/', index);

/*--------------- ROUTING FOR REACT on PRODUCTION ------------------*/
// All remaining requests return the React app, so it can handle routing.
// No matter what the user ask, we send the index.html, which loads ReactRouter, and that takes care of routing
app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});
/*--------------- ROUTING FOR REACT on PRODUCTION ------------------*/

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.sendFile(path.join(__dirname, 'views', 'error.html'));
});

module.exports = app;
