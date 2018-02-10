const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SongsSchema = new Schema({
	song1: String,
	song2: String,
	song3: String
});

const Songs = mongoose.model('Songs', SongsSchema);

module.exports = Songs;