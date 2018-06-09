require('../models/guestModel');
var mongoose = require('mongoose');
var nodemailer = require('nodemailer');
require('dotenv').config();

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'jacqueandkemelwedding@gmail.com',
		pass: process.env.PASSWORD
	}
});

var Guest = mongoose.model('Guests');

exports.list_all_guests = (req, res) => {

	Guest.find({}, (err, guest) => {

		if (err) res.status(500).send(err);

		res.status(200).json(guest);

	});

};

exports.create_a_guest = (req, res) => {

	if (!req.body.email || !req.body.email) {

		res.status(500).send('Missing data');

	} else {

		var new_guest = new Guest(req.body);
		
			new_guest.save((err, guest) => {
		
				if (err) res.status(500).send(err);
		
				const mailOptions = {
					from: 'jacqueandkemelwedding@gmail.com',
					to: guest.email,
					subject: 'Test',
					html: `<p>Test</p>`
				};
		
				transporter.sendMail(mailOptions, function (err, info) {
		
					if (err) res.status(500).send(err);
		
					res.status(200).json(guest);
		
				});
		
			});

	}

};