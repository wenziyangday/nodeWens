const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
	userName: String,
	password: String
});

module.exports = userSchema;