import React from 'react';
import NoteApp from './NoteApp.jsx';
// import AddNote from './AddNote.jsx';
// import Note from './Note.jsx';

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

// const Note = ({ title, body, idx, deleteNote }, ...props) => {
//   const check = prop => {
//     console.log(`prop:`, prop);
//   };
//   return (
//     <article
//       style={{
//         margin: '10px',
//         padding: '10px',
//         border: '1px solid #444444',
//         borderRadius: '4px',
//       }}
//       key={idx}>
//       <h3>{title}</h3>
//       <p>{body}</p>
//       <button
//         onClick={idx => {
//           deleteNote(idx);
//           check(idx);
//         }}>
//         Delete
//       </button>
//     </article>
//   );
// };

// const AddNote = props => {
//   const [titleValue, setTitleValue] = useState('');
//   const [bodyValue, setBodyValue] = useState('');
//   const [noteData, setNoteData] = useState([]);

//   const handleSubmit = e => {
//     e.preventDefault();
//     setTitleValue('');
//     setBodyValue('');
//     props.onChange(noteData);
//   };

//   return (
//     <div className='add-note'>
//       <h2>Add a new note</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor='note-title'>Note title</label>
//         <input
//           style={{ margin: 'auto 5px' }}
//           type='text'
//           id='note-title'
//           value={titleValue}
//           onChange={e => {
//             setTitleValue(e.target.value);
//           }}
//         />
//         <label htmlFor='note-body'>Note</label>
//         <input
//           style={{ margin: 'auto 5px' }}
//           type='text'
//           id='note-body'
//           value={bodyValue}
//           onChange={e => {
//             setBodyValue(e.target.value);
//           }}
//         />
//         <button
//           onClick={() => {
//             setNoteData([...noteData, { title: titleValue, body: bodyValue }]);
//           }}>
//           Add Note
//         </button>
//       </form>
//     </div>
//   );
// };

function App() {
  // const [notes, setNotes] = useState();

  // const handleChange = newNotes => {
  //   setNotes(newNotes);
  // };

  // const deleteNote = props => {
  //   console.log(`hoisted`);
  //   console.log(props);
  // };
  return (
    // <div className='container' style={{ padding: '3rem' }}>
    //   <h1>ToDos</h1>
    //   <AddNote value={notes} onChange={handleChange} />
    //   {notes ? (
    //     notes.map((note, idx) => {
    //       return (
    //         <Note
    //           key={idx}
    //           title={note.title}
    //           body={note.body}
    //           deleteNote={deleteNote}
    //         />
    //       );
    //     })
    //   ) : (
    //     <p>Add your first note!</p>
    //   )}
    // </div>
    <>
      <NoteApp />
    </>
  );
}

export default App;
