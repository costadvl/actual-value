const express = require('express');
const routes = express.Router();
const models = require('./models');
const entitie = require('./entities');

routes.get('/', function (req,res) {
	res.status(200).json({message: 'hello'});
});
//routes.use('/some', models)
routes.use('/user', models);
routes.use('/entitie', entitie);

module.exports = routes;
