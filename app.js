var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var postRouter = require('./routes/post');

//connecion
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/tarea',{useNewUrlParse:true})
.then(()=> console.log('Se conecto'))
.catch((error)=>{console.log(error)
});


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/Influencer',postRouter);

module.exports = app;
