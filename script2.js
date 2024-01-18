const express = require('express');
const app = express();
app.set("view engine", "ejs");
app.use(express.static('./Public'));
app.get('/', function (req, res) {
  res.render("index");
})
app.get('/contact', function (req, res) {
  res.render("contact");
})
app.get('/profile', function (req, res) {
  res.send('Hellooo to all');
})
//dynamic routes...
app.get('/profile/:username', function (req, res) {
  res.send(`Heloo to ${req.params.username}`);
})
app.get('/cynthia', function (req, res) {
  res.render("cynthia");
})
//error handeling...
app.get('/error', function (req, res) {
  throw Error()
})
app.use(function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
})
app.listen(3000)