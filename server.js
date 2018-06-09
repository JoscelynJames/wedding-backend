const express = require('express');
const app = express();
const port = process.env.PORT || 3210;
const routes = require('./routes.js');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db/db');
require('dotenv').config();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);

app.listen(port, () => {
	console.log('Listening on port ' + port);
});

module.exports = app;