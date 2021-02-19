import React from 'react';

const Note = ({ title, body, idx, deleteNote }, ...props) => {
  return (
    <article
      style={{
        margin: '10px',
        padding: '10px',
        border: '1px solid #444444',
        borderRadius: '4px',
      }}
      key={idx}>
      <h3>{title}</h3>
      <p>{body}</p>
      <button
        onClick={idx => {
          deleteNote(idx);
        }}>
        Delete
      </button>
    </article>
  );
};

export default Note;
