var express = require('express');
const session = require('express-session')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const es6Renderer = require('express-es6-template-engine');
const db = require('./models');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const store = new SequelizeStore({db: db.sequelize })


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const notesRouter = require('./routes/notes');
var app = express();

app.engine('html', es6Renderer)
app.set('views', 'templates');
app.set('view engine', 'html');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(
    session({
        secret: 'secret', // used to sign the cookie
        resave: false, // update session even w/ no changes
        saveUninitialized: true, // always create a session
        cookie: {
            secure: false, // true: only accept https req's
            maxAge: 2592000, // time in seconds = 30 days
        },
        store: store,
    })
);
store.sync()

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/notes', notesRouter);


module.exports = app;
