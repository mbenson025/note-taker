const path = require('path');
const router = require('express').Router();

//main index page
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

//notes page
router.get('/notes', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

module.exports = router;
