const express = require('express');
const router = express.Router();
const guest = require('./db/controllers/guestController');
const song = require('./db/controllers/songController');

router.get('/guests', (req, res) => {
	guest.list_all_guests(req, res);
});

router.post('/guests', (req, res) => {
	guest.create_a_guest(req, res);
});

router.get('/songs', (req, res) => {
	song.list_all_songs(req, res);
});

router.post('/songs', (req, res) => {
	song.create_a_song(req, res);
});

module.exports = router;