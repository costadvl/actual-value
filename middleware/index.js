const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');

module.exports = function(app) {
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json(true));
	app.use(session({
		secret: 'some-secrete-code',
		resave: false,
		saveUninitialized: true
	}));
	app.use(passport.initialize());
	app.use(passport.session());
}
