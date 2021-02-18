import React, { useState } from 'react';
import Note from './Note';

const Notes = ({ notes }) => {
  return (
    <>
      {notes ? (
        notes.map((note, idx) => {
          return <Note key={idx} title={note.title} body={note.body} />;
        })
      ) : (
        <p>Add your first note!</p>
      )}
    </>
  );
};

export default Notes;
