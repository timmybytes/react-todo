import React, { useState } from 'react';

const NoteApp = props => {
  // Default state
  const [noteData, setNoteData] = useState([
    {
      id: Date.now(),
      title: 'A Sample Note',
      body: "Here's a sample note!",
    },
  ]);
  const [noteTitle, setNoteTitle] = useState('');
  const [noteBody, setNoteBody] = useState('');

  const [editing, setEditing] = useState(false);
  const [editedNote, setEditedNote] = useState({
    id: null,
    title: '',
    body: '',
  });

  // Prevent page reload, reset note values to default
  const handleSubmit = e => {
    e.preventDefault();
    setNoteTitle('');
    setNoteBody('');
  };

  const handleEdit = note => {
    console.log(note);
    setEditing(!editing);
    setEditedNote({
      title: note.title,
      body: note.body,
      id: note.id,
    });
  };

  const confirmEdit = note => {
    let newArr = [...noteData.map(note => {})];
    // setNoteData([...noteData.filter(note => note.id !== note.id)]);
    setEditing(!editing);
    // setNoteData([...noteData, editedNote]);
    // deleteNote(editedNote.id)
    // setNoteTitle('');
    // setNoteBody('');
    // setEditedNote({
    //   id: null,
    //   title: '',
    //   body: '',
    // });
  };

  // Remove note with matching id
  const deleteNote = id => {
    setNoteData([...noteData.filter(note => note.id !== id)]);
  };

  return (
    <main className='container'>
      <div className='add-note'>
        {editing ? (
          <form onSubmit={handleSubmit}>
            <label htmlFor='add-note-title'>Edit Title</label>
            <input
              id='add-note-title'
              value={noteTitle}
              onChange={e => setNoteTitle(e.target.value)}
              placeholder={editedNote.title}
            />
            <label htmlFor='add-note-body'>Edit Body</label>
            <input
              id='add-note-body'
              value={noteBody}
              onChange={e => setNoteBody(e.target.value)}
              placeholder={editedNote.body}
            />
            <button onClick={() => confirmEdit()}>Confirm</button>
          </form>
        ) : (
          <form
            style={editing ? { display: 'none' } : { display: 'block' }}
            onSubmit={handleSubmit}>
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
        )}
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
              <button onClick={() => deleteNote(note.id)}>Delete</button>
              <button onClick={() => handleEdit(note)}>Edit</button>
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
