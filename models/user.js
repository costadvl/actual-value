const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;
const passportLocalMongoose = require('passport-local-mongoose');

var schemaUser = new Schema({
	name: String,
	username: {type: String, required: true, unique: true},
	password: {type: String, required: true},
	admin: Boolean,
	location: String,
	meta: {
		age: Number,
		website: String,
	},
	created_at: Date,
	updated_at: Date
});

schemaUser.pre('save', function (next) {
	var user = this;
	if(!user.isModified('password')) return next();

	bcrypt.genSalt(SALT_WORK_FACTOR, function (err,salt) {
		if (err) return next(err);
		bcrypt.hash(user.password, salt, function (err,hash) {
			if(err) return next(err);

			user.password = hash;
			next();
		});
	});
});

schemaUser.methods.comparePassword = function (candidatePassword, cb) {
	bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
		if (err) return cb(err);
		cb(null, isMatch);
	})
}

schemaUser.plugin(passportLocalMongoose);

var modelUser = mongoose.model('User', schemaUser);

module.exports = modelUser;
