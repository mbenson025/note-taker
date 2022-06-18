const { createNote, deleteNote } = require('../library/notes');
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
  const storeNote = createNote(req.body, note);
  res.json(storeNote);
  console.log(storeNote);
});

router.delete('/notes/:id', (req, res) => {
  noteID = req.params.id;
  const delNote = deleteNote(noteID, note);
  if (delNote) {
    res.json(delNote);
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;
