import React, { useState } from 'react';

const NoteApp = props => {
  const [noteData, setNoteData] = useState([
    {
      id: Date.now(),
      title: 'A Sample Note',
      body: "Here's a sample note!",
    },
  ]);
  const [noteTitle, setNoteTitle] = useState('');
  const [noteBody, setNoteBody] = useState('');

  // Prevent page reload, reset note values to default
  const handleSubmit = e => {
    e.preventDefault();
    setNoteTitle('');
    setNoteBody('');
  };

  // Remove note with matching id
  const handleDelete = id => {
    setNoteTitle('');
    setNoteBody('');
    setNoteData([...noteData.filter(note => note.id !== id)]);
  };

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
                {
                  id: Date.now(),
                  title: noteTitle,
                  body: noteBody,
                },
              ]);
            }}>
            Add Note
          </button>
        </form>
      </div>
      <section className='note-list'>
        {noteData.length > 0 ? (
          noteData.map((note, idx) => (
            <article
              style={{
                border: '1px solid #444444',
                borderRadius: '10px',
                display: 'flex',
                margin: '1rem',
                padding: '1rem',
                flexDirection: 'column',
                maxWidth: '400px',
              }}
              key={note.id}>
              <h3>{note.title}</h3>
              <p>{note.body}</p>
              <button onClick={() => handleDelete(note.id)}>Delete</button>
            </article>
          ))
        ) : (
          <p>Add your first note!</p>
        )}
      </section>
    </main>
  );
};

export default NoteApp;
