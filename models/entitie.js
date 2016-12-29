const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var schemaEntitie = new Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	sector: {
		type: String,
		required: true
	},
	headquarters: {
		type: String
	},
	web_site: {
		type: String,
		unique: true
	},
	updated: {
		type: Date,
		default: Date.now
	},
	type: {
		type: String
	}
})
