const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//listens for environment PORT or defaults to 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
