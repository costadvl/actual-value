const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;
const passportLocalMongoose = require('passport-local-mongoose');

var schemaUser = new Schema({
	name: {
		type: String,
		required: true
	},
	username: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	admin: {
		type: Boolean,
		default: false
	},
	location: {
		sype: String,
		defalut: null
	},
	meta: {
		age: {
			type: Number,
			defalut: null
		},
		website: {
			type: String,
			default: null
		},
	},
	created_at: Date.now,
	updated_at: Date.now
});

schemaUser.pre('save', function(next) {
	var user = this;
	if (!user.isModified('password')) return next();
	bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
		if (err) return next(err);
		bcrypt.hash(user.password, salt, function(err, hash) {
			if (err) return next(err);
			user.password = hash;
			next();
		});
	});
});

schemaUser.post('save', function(err, doc, next) {
	if (err) {
		next(new Error('mongoose post error: save'))
	}
	if (doc) {
		console.log('user saved: ', doc);
		next();
	}
});
//schemaUser.methods.comparePassword = function (candidatePassword, cb) {
//bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
//if (err) return cb(err);
//cb(null, isMatch);
//})
//}

//schemaUser.plugin(passportLocalMongoose);


module.exports = mongoose.model('User', schemaUser);
