const mongoose = require('mongoose');
const Users = mongoose.model('User');

module.exports = function (req,res) {
	mongoose.find('User').exec(function (err, data) {
		if (err) return next(err);
		if (!data) return next();
		res.status(200).json({data});
	})
}
