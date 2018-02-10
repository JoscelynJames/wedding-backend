var mongoose = require('mongoose');
require('../models/guestModel');

var Guest = mongoose.model('Guests');

exports.list_all_guests = (req, res) => {
	Guest.find({}, (err, guest) => {
		if (err) { res.send(err); }
		res.json(guest);
	});
};

exports.create_a_guest = (req, res) => {
	var new_guest = new Guest(req.body);
	new_guest.save((err, guest) => {
		if (err) { res.send(err); }
		res.json(guest);
	});
};