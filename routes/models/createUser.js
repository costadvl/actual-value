const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = function (req,res) {
	var body = req.body;
	var newUser = new User(body);
	newUser.save(function (err,data) {
		if (err) {
			console.log(err);
			res.status(404).send(err);
		}	
		res.send(data);
	})
}
