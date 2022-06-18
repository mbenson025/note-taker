const express = require('express');
const fs = require('fs');
const path = require('path');
let uuid = require('uuid').v4;
const compData = require('../db/db.json');

function newNote(body) {
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

module.exports = { newNote };
