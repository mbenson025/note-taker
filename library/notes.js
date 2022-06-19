const express = require('express');
const fs = require('fs');
const path = require('path');
let uuid = require('uuid').v4;
const dbnotes = require('../db/db.json');

function createNote(body) {
  const { title, text } = body;
  let newNotes = { title, text, id: uuid() };

  dbnotes.push(newNotes);
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify(dbnotes)
  );
}

function deleteNote(id) {
  for (let i = 0; i < dbnotes.length; i++) {
    if (dbnotes[i].id === id) {
      dbnotes.splice(i, 1);
      fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(dbnotes, null, 2)
      );
    }
  }
}

module.exports = { createNote, deleteNote };
