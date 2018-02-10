const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GuestsSchema = new Schema({
	guest1: String,
	guest2: String
});

const Guests = mongoose.model('Guests', GuestsSchema);

module.exports = Guests;