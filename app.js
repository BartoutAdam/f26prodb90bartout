var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
const mongoose = require('mongoose');

const Volcano = require('./models/volcano');

mongoose.connect(process.env.MONGO_CON)
  .then(async () => {
    console.log('Connection to DB succeeded');

    // Reset the volcano collection for this lab.
    await Volcano.deleteMany({});
    await Volcano.insertMany([
      { volcano_name: 'Mount Fuji', country: 'Japan', elevation: 3776 },
      { volcano_name: 'Mount Vesuvius', country: 'Italy', elevation: 1281 },
      { volcano_name: 'Mount Kilimanjaro', country: 'Tanzania', elevation: 5895 }
    ]);

    console.log('Added 3 volcanoes');
  })
  .catch((error) => console.error('MongoDB setup error:', error.message));

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var volcanoesRouter = require('./routes/volcanoes');
var gridRouter = require('./routes/grid');
var pickRouter = require('./routes/pick');
const resourceRouter = require('./routes/resource');

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
app.use('/users', usersRouter);
app.use('/volcanoes', volcanoesRouter);
app.use('/grid', gridRouter);
app.use('/selector', pickRouter);
app.use('/resource', resourceRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
