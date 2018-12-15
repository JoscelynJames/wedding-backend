require("../models/guestModel");
var mongoose = require("mongoose");
var nodemailer = require("nodemailer");
const fs = require("fs");
var emailTemplate = require("../email/email");

require("dotenv").config();

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "jacqueandkemelwedding@gmail.com",
    pass: process.env.PASSWORD
  }
});

var Guest = mongoose.model("Guests");

exports.list_all_guests = (req, res) => {
  Guest.find({}, (err, guest) => {
    if (err) res.status(500).send(err);

    res.status(200).json(guest);
  });
};

exports.create_a_guest = (req, res) => {
  if (!req.body.email || !req.body.guest1) {
    res.status(500).send("Missing data");
  } else {
    var new_guest = new Guest(req.body);
    console.log("before save");
    new_guest.save((err, guest) => {
      if (err) res.status(500).send(err);

      var mailOptions;

      if (guest.attending) {
        console.log("in attending");
        mailOptions = {
          from: "jacqueandkemelwedding@gmail.com",
          to: guest.email,
          subject: "We have you in the books",
          html: emailTemplate
        };
      } else {
        mailOptions = {
          from: "jacqueandkemelwedding@gmail.com",
          to: guest.email,
          subject: "We got your RSVP",
          html: `<p>We are sorry to hear you cant make it!</p>`
        };
      }

      console.log("before transporter");

      transporter.sendMail(mailOptions, function(err, info) {
        if (err) {
          console.log("Error in transporter: ", err);
          res.status(500).send(err);
        } else {
          res.status(200).json(guest);
        }
      });
    });
  }

  remove_guest = id => {
    mongoose.findOneAndRemove({ id: id }, (err, res) => {
      if (err) {
        res.status(550).send(err);
      } else {
        res.status(200).send("Guest Removed");
      }
    });
  };
};
