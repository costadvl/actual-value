const mongoose = require('mongoose');
const Users = mongoose.model('User');

module.exports = function(app){
	app.post('/create', function (req,res,next) {
		var body = req.body;
		var user = new User({body});
		console.log(body);
		user.save(function (err) {
			if(err){
				res.send(err)
			}
			res.json({'message': 'user created'})
		})
	})
}
