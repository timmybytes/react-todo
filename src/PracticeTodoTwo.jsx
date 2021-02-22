import React, { useState, useEffect } from 'react';

const PracticeTodoTwo = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [editNote, setEditNote] = useState(null);
  const [editedText, setEditedText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setTodos(
      [...todos].concat({
        id: new Date().getTime(),
        text: todo,
        completed: false,
      })
    );
    setTodo('');
  };

  const handleDelete = id => {
    const updatedTodos = [...todos].filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleEdit = id => {
    setEditNote(todo.id);
    const updatedTodos = [...todos].map(todo => {
      if (todo.id === id) {
        todo.text = editedText;
      }
      return todo;
    });
    setTodos(updatedTodos);
    setEditedText('');
    setEditNote(null);
  };

  return (
    <main style={{ padding: '2rem', margin: '0 auto', maxWidth: '650px' }}>
      <header>
        <h1>Todos</h1>
      </header>
      <section
        className='add-todo'
        style={{
          padding: '1rem',
          border: '1px solid lightgrey',
          borderRadius: '4px',
        }}>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            onChange={e => setTodo(e.target.value)}
            value={todo}
          />
          <button type='submit'>Add todo</button>
        </form>
      </section>
      <section className='show-todos'>
        {todos.map(todo => (
          <article
            key={todo.id}
            className='todo'
            style={{
              padding: '1rem',
              border: '1px solid lightgrey',
              borderRadius: '4px',
              margin: '2rem auto',
            }}>
            <input id='completed' type='checkbox' />
            <label htmlFor='completed'>Completed?</label>
            {editNote === todo.id ? (
              <input
                type='text'
                onChange={e => setEditedText(e.target.value)}
                value={editedText}
              />
            ) : (
              <p>
                {todo.text || (
                  <span style={{ color: 'lightgrey', fontStyle: 'italic' }}>
                    Blank todo
                  </span>
                )}
              </p>
            )}
            {editNote === todo.id ? (
              <button onClick={() => handleEdit(todo.id)}>Confirm edit</button>
            ) : (
              <button onClick={() => setEditNote(todo.id)}>Edit</button>
            )}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </article>
        ))}
      </section>
    </main>
  );
};

export default PracticeTodoTwo;
