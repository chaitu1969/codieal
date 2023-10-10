const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/codieal');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error has been generated on connection"));

db.once('open', () => {
    console.log("Sucessfully connected to DB");
})