var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index'),
    japan = require('./routes/japan'),
    excel = require('./routes/excel'),
    upload = require('./routes/ajax/upload'),
    checkLove = require('./routes/ajax/checkLove'),
    inputInfo = require('./routes/ajax/inputInfo');

var app = express();

// view engine setup
var nunjucks = require('nunjucks');
nunjucks.configure(path.join(__dirname, 'views'), {
  autoescape: true,
  express: app,
  watch: true
});

app.use(favicon(path.join(__dirname, 'public/src', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/japan', japan);
app.use('/excel', excel);
app.use('/ajax/upload', upload);
app.use('/ajax/checklove', checkLove);
app.use('/ajax/inputInfo', inputInfo);

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
  res.render('error.html');
});

module.exports = app;
