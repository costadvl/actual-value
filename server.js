const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json(true));

var baseRouter = new express.Router();
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
app.use('/public', express.static(path.join(__dirname+'/app/public')));
app.use('/components', express.static(path.join(__dirname+'/bower_components')))

app.listen(port, function () {
	console.log('port in action: ', port);
});

