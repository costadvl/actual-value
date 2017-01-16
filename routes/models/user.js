const mongoose = require('mongoose');
const Users = mongoose.model('User');

module.exports = function (req,res,next) {
	Users.findById(req.params['userId'], function (err, data) {
		if (err) return next(err);
		if (!data) return next();
		res.status(200).json({data});
	});
}
