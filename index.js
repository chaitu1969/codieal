const express = require("express");
const app = express();
const port = 8000;
const expressLayout = require("express-ejs-layouts");
const db = require('./config/mongoose');
const cookieparser = require('cookie-parser');


app.use(express.urlencoded());
app.use(cookieparser());

app.use(expressLayout);

app.use(express.static('./assets'));

//extracting scripts and styles

app.set('layout extractStyles', true);
app.set('layout extractScript', true);

// use express router
app.use("/", require("./routes"));

// set up the view engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }

  console.log(`Server is running on port: ${port}`);
});
