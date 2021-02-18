import React, { useState } from 'react';
import Note from './Note';

const AddNote = props => {
  const [titleValue, setTitleValue] = useState('');
  const [bodyValue, setBodyValue] = useState('');
  const [noteData, setNoteData] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    setTitleValue('');
    setBodyValue('');
    props.onChange(noteData);
  };

  return (
    <div className='add-note'>
      <h2>Add a new note</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='note-title'>Note title</label>
        <input
          type='text'
          id='note-title'
          value={titleValue}
          onChange={e => {
            setTitleValue(e.target.value);
          }}
        />
        <label htmlFor='note-body'>Note</label>
        <input
          type='text'
          id='note-body'
          value={bodyValue}
          onChange={e => {
            setBodyValue(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setNoteData([...noteData, { title: titleValue, body: bodyValue }]);
          }}>
          Add Note
        </button>
      </form>
    </div>
  );
};

export default AddNote;
