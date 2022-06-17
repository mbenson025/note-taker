const express = require('express');
const fs = require('fs');
const path = require('path');
const htmlR = require('./routes/htmlRoutes');
const apiR = require('./routes/apiRoutes');

//listens for environment PORT or defaults to 3001
const PORT = process.env.PORT || 3001;

const app = express();

app.use('/', htmlR);
app.use('/api', apiR);

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//set a static folder
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static('public'));

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
