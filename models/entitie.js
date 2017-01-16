const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var schemaEntitie = new Schema({
	name: {
		index: true,
		unique: true,
		type: String,
		required: true,
	},
	sector: {
		type: String,
		required: true
	},
	headquarters: [{
		type: String,
		maxlength: 250,
		default: null
	}],
	web_site: {
		type: String,
		unique: true,
		default: null
	},
	updated: {
		type: Date,
		default: Date.now
	},
	ranking: {
		type: Number,
		default: 0,
		get: v => Math.round(v),
		set: v => Math.round(v),
	}
});

schemaEntitie.pre('save', function (next) {
	var entitie = this;
	console.log('pre save entitie');
	next();
});

schemaEntitie.post('save', function(err, doc, next) {
	if (err) {
		next(new Error('entitie post error: save'))
	}
	if (doc) {
		console.log('user saved: ', doc);
		next();
	}
});


// read more abouth doc.markModifield()
module.exports = mongoose.model('Entitie', schemaEntitie);
