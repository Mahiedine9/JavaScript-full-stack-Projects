var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


const errorMiddleware = require('./middlewares/error.middleware');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var accessRouter = require('./routes/access');
var adminRouter = require('./routes/admin');
var showsRouter = require('./routes/shows');


var app = express();

const dbConnection = require('./controllers/db.controller.js');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public2')));

// routes middlewares
app.use('/access', accessRouter);
app.use('/admin.html', adminRouter);


app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/admin', adminRouter); 
app.use('/shows', showsRouter);
app.use('/socket.io', express.static(path.join(__dirname, 'node_modules/socket.io/client-dist')));



app.use(errorMiddleware);


module.exports = app;
