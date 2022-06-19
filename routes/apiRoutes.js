const { createNote, deleteNote } = require('../library/notes');
const dbnotes = require('../db/db.json');
const router = require('express').Router();

//send the db.json data on notes page
router.get('/notes', (req, res) => {
  let results = dbnotes;
  res.json(results);
});

//post notes object
router.post('/notes', (req, res) => {
  const storeNote = createNote(req.body, dbnotes);
  res.json(storeNote);
});

router.delete('/notes/:id', (req, res) => {
  noteID = req.params.id;
  // console.log(noteID, dbnotes);
  const delNote = deleteNote(noteID, dbnotes);
  res.json(delNote);
});

module.exports = router;
