var mongoose = require('mongoose');
require('../models/songModel');

var Song = mongoose.model('Song');

exports.list_all_songs = (req, res) => {
	Song.find({}, (err, song) => {

		if (err) res.status(500).send(err);

		res.status(200).json(song);

	});

};

exports.create_a_song = (req, res) => {

	if (req.body.length > 0) {

		req.body.forEach(song => {
	
			var new_song = new Song(song);

			new_song.save((err, savedSong) => {

				if (err) res.status(500).send(err);
	
			});
			
		});

	res.sendStatus(200);

	} else {

		res.sendStatus(201);

	}

};