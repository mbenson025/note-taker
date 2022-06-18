const express = require('express');
const fs = require('fs');
const path = require('path');
let uuid = require('uuid').v4;
const compData = require('../db/db.json');

function createNote(body) {
  const { title, text } = body;
  let newNotes = { title, text, id: uuid() };
  console.log(newNotes);
  console.log(compData);

  compData.push(newNotes);
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify(compData)
  );
}
function deleteNote(id) {
  for (let i = 0; i < compData.length; i++) {
    let note = compData[i];

    if (note.id === id) {
      compData.splice(i, 1);
      fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(compData, null, 2)
      );
    }
  }
}

module.exports = { createNote, deleteNote };
