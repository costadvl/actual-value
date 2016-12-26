const express = require('express');
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

var URIusers = 'mongodb://localhost:27017/actualValue';
var dbConnection = mongoose.connection;
// manage db connection
mongoose.connect(URIusers);
dbConnection.on('error', console.error.bind(console, 'an error has ocured: '));
dbConnection.on('open', function () {
	console.log('connected');
});

const models = require('./models');
const routes = require('./routes');
const middleware = require('./middleware');

// middleware
var app = express();
middleware(app);

//passport config
var Account = require('./models/user');
passport.use(new localStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

var baseRouter = express.Router();
var port = process.env.PORT || 9000;

baseRouter.use(function(req,res,next){
	console.log('baseRouter working');
	next();
});

baseRouter.route('/')
	.get(function (req,res) {
		res.sendFile(path.join(__dirname+'/app/index.html'));
	});

app.use('/', baseRouter);
app.use('/api', routes);
app.use('/public', express.static(path.join(__dirname+'/app/public')));
app.use('/components', express.static(path.join(__dirname+'/bower_components')))

app.listen(port, function () {
	console.log('port in action: ', port);
});

