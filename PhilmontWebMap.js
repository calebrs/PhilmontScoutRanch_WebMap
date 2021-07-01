const express = require("express");
const morgan = require("morgan");

const app = express();
const host = "localhost";
const port = 3000;

app.set("views", "./views");
app.set("view engine", "pug");

app.use(morgan("common"));
app.use(express.static("public"));

//functions go here

// ----------------

// routes -------------------

app.get('/', (req, res) => {
  res.redirect('/Philmont-Web-Map');
});

app.get('/Philmont-Web-Map', (req, res) => {
  res.render('map');
});

app.listen(port, host, () => {
  console.log(`PhilmontWebMap is listening on port ${port}...`);
});