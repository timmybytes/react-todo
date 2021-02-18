import React, { useState } from 'react';
import AddNote from './AddNote.jsx';
import Note from './Note.jsx';

// Entry field
/*
Header
Body
Submit button
*/

// Note card
/*
Display header/body
Edit button
Delete button
 */

// Note list
/*
Display note cards
 */

function App() {
  const [notes, setNotes] = useState();

  const handleChange = newNotes => {
    setNotes(newNotes);
  };

  const deleteNote = a => {
    console.log(`idx`, a);
  };
  return (
    <div className='container' style={{ padding: '3rem' }}>
      <h1>ToDos</h1>
      <AddNote value={notes} onChange={handleChange} />
      {notes ? (
        notes.map((note, idx) => {
          return (
            <Note
              key={idx}
              title={note.title}
              body={note.body}
              deleteNote={deleteNote}
            />
          );
        })
      ) : (
        <p>Add your first note!</p>
      )}
    </div>
  );
}

export default App;
