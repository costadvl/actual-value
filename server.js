const express = require('express');

var app = express();

app.get('/', function (req,res) {
	console.log('starting express server');
	res.status(200)
		.end('hello');
});
app.listen(4000);
