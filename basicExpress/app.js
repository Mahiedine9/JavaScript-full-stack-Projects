var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var jsonRouter = require('./routes/json');
var taskRouter = require('./routes/task.js');

const error = require('./middlewares/error.middleware');

const dbConnection = require('./controllers/db.controller.js');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/json', jsonRouter);
app.use('/task', taskRouter);


// catch 404 and forward to error handler
app.use(error);

module.exports = app;
