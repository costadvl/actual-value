const mongoose = require('mongoose');
const Entities = mongoose.model('Entitie');

module.exports = function (req,res,next) {
	Entities.findById(req.params['entitieId'], function (err,data) {
		if(err) return next(err);
		if(!data) return next();
		res.status(200).json({data});
	});
}
