const mongoose = require('mongoose');
const Entitie = mongoose.model('Entitie');

module.exports = function (req,res) {
	var body = req.body;
	var newEntitie = new Entitie(body);

	newEntitie.save(function(err,data){
		if (err) {
			console.log(err);
			res.status(404).send(err);
		}
		res.send(data);
	});
}
