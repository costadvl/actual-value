const mongoose = require('mongoose');
const Users = mongoose.model('User');<`0`>

module.exports = function (req,res) {
	mongoose.findById(req.params['userId'], function (err, data) {
		if (err) return next(err);
		if (!data) return next();
		res.status(200).json({data});
	});
}
