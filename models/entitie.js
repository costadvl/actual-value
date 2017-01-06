const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var schemaEntitie = new Schema({
	_id: Schema.Types.ObjectId,
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
	headquarters: {
		type: String,
		maxlength: 250,
	},
	web_site: {
		type: String,
		unique: true
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
	//var err = new Error(''
	next();
});


// read more abouth doc.markModifield()
module.exports = mongoose.model('Entitie', schemaEntitie);
