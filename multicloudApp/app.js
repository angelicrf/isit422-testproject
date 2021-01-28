var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const cors = require('cors');

var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// Commented out for Azure deployment
//  var corsOptions = {
//   origin: 'http://localhost:4200',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
// } 

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Commented out for Azure deployment
// app.use(cors(corsOptions));

app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  });
module.exports = app;
