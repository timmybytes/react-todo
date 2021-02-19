/*
const [noteData, setNoteData] = useState([
  {
    id: 0,
    title: '',
    body: ''
  }
])

const [noteTitle, setNoteTitle] = useState('')
const [noteBody, setNoteBody] = useState('')

const handleSubmit = props => {

  e.preventDefault();
  setNoteData()
  })
}

<main className={container}>
  <AddNote>
    <form onSubmit={handleSubmit}>
      <label htmlfor='add-note-title'>Note Title</label>
      <input id='add-note-title' value={noteTitle} onChange={(e) => setNoteTitle(e.target.value)} />
      <label htmlfor='add-note-body'>Note Body</label>
      <input id='add-note-body' value={noteBody} onChange={(e) => setNoteBody(e.target.value)} />
    </form>
  </AddNote>
  <Notes>
  {
    noteData > 0
      ? (
        <Note />
      ) : (
        <p>Add your first note!</p>
      )
  }
  </Notes>
</main>
*/

import React, { useState } from 'react';

const NoteApp = props => {
  const [noteData, setNoteData] = useState([
    {
      id: 0,
      title: '',
      body: '',
    },
  ]);

  const [noteTitle, setNoteTitle] = useState('');
  const [noteBody, setNoteBody] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(noteData);
    setNoteTitle('');
    setNoteBody('');
  };

  const newID = noteData[-1];

  return (
    <main className='container'>
      <div className='add-note'>
        <form onSubmit={handleSubmit}>
          <label htmlFor='add-note-title'>Note Title</label>
          <input
            id='add-note-title'
            value={noteTitle}
            onChange={e => setNoteTitle(e.target.value)}
          />
          <label htmlFor='add-note-body'>Note Body</label>
          <input
            id='add-note-body'
            value={noteBody}
            onChange={e => setNoteBody(e.target.value)}
          />
          <button
            onClick={() => {
              setNoteData([
                ...noteData,
                { id: newID, title: noteTitle, body: noteBody },
              ]);
            }}>
            Add Note
          </button>
        </form>
      </div>
      <section className='note-list'>
        {noteData > 0 ? (
          <article className='note' />
        ) : (
          <p>Add your first note!</p>
        )}
      </section>
    </main>
  );
};

export default NoteApp;
