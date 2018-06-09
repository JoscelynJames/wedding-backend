const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SongSchema = new Schema({
	title: String,
	artist: String
});

const Song = mongoose.model('Song', SongSchema);

module.exports = Song;