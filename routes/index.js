const routes = require('express').Router();
routes.get('/', function (req,res) {
	res.status(200).json({message: 'hello'});
});

module.exports = routes;
