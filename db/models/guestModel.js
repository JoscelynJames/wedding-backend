const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GuestsSchema = new Schema({
	attending: {
		type: Boolean,
		required: true
	},
	allergies: {
		type: String
	},
	guest1: {
		type: String,
		required: true
	},
	guest2: String,
	email: String,
	phone: String
});

const Guests = mongoose.model('Guests', GuestsSchema);

module.exports = Guests;