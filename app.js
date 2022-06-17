const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes-------------------------------------------

//main index page
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

//notes page
app.get('/notes', function (req, res) {
  res.sendFile(path.join(__dirname, '/public/notes.html'));
});

//send the db.json data on notes page
app.get('/notes', function (req, res) {
  res.sendFile(path.join(__dirname, 'db/db.json'));
});

//post notes from user/log object
app.post('/api/notes', (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

//routes end----------------------------------------

//set a static folder
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static('public'));

//listens for environment PORT or defaults to 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
