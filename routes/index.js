const express = require('express');
const routes = express.Router();
const models = require('./models');

routes.get('/', function (req,res) {
	res.status(200).json({message: 'hello'});
});
//routes.use('/some', models)
routes.use('/user', models)

module.exports = routes;
