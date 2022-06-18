const { newNote } = require('../library/notes');
const note = require('../db/db.json');
const router = require('express').Router();
// const noteP = JSON.stringify(note);

//send the db.json data on notes page
router.get('/notes', (req, res) => {
  let results = note;
  res.json(results);
  console.log(results);
});

//post notes object
router.post('/notes', (req, res) => {
  const storeNote = newNote(req.body, note);
  res.json(storeNote);
  console.log(storeNote);
});

module.exports = router;
