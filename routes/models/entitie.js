const mongoose = require('mongoose');
const Entities = mongoose.model('Entitie');

module.exports = function (req,res) {
	Entities.findById(req.params['entitieId'], function (err,data) {
		if (err) {
			var error = new Error('something went wrong from entitites')
			console.log(err);
			next(error);
		}
		if(!data) return next();
		res.status(200).json({data});
	});
}
