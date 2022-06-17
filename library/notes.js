const { json } = require('express');
const fs = require('fs');
const path = require('path');
const uuid = require('uuid');
const note = require('../db/db.json');

function newNote(body) {
  const { title, text } = body;
  let newNotes = { title, text, id: uuid() };

  note.push(newNotes);
  fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(note));
}

module.exports = { newNote };
