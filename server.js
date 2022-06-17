const express = require('express');
const fs = require('fs');
const path = require('path');
const htmlR = require('./routes/html-r');
const apiR = require('./routes/api-r');

const app = express();

app.use('/', htmlR);
app.use('/', apiR);

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes-------------------------------------------

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
