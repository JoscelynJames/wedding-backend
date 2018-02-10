var mongoose = require('mongoose');
require('../models/songModel');

var Song = mongoose.model('Songs');

exports.list_all_songs = (req, res) => {
	Song.find({}, (err, song) => {
		if (err) { res.send(err); }
		res.json(song);
	});
};

exports.create_a_song = (req, res) => {
	var new_song = new Song(req.body);
	new_song.save((err, song) => {
		if (err) { res.send(err); }
		res.json(song);
	});
};