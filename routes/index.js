const routes = require('express').Router();
const models = require('./models');

routes.get('/', function (req,res) {
	res.status(200).json({message: 'hello'});
});
routes.use('/some', models)

module.exports = routes;
