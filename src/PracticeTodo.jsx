import React, { useState, useEffect } from 'react';

export default function PracticeTodo() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');
  const [editText, setEditText] = useState('');
  const [editingMode, setEditingMode] = useState(null);

  useEffect(() => {
    const temp = localStorage.getItem('todos');
    const loadedTodos = JSON.parse(temp);

    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);

  useEffect(() => {
    const temp = JSON.stringify(todos);
    localStorage.setItem('todos', temp);
  }, [todos]);

  const handleSubmit = e => {
    e.preventDefault();
    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };
    setTodos([...todos].concat(newTodo));
    setTodo('');
  };

  const handleDelete = id => {
    const updatedTodos = [...todos].filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleEdit = id => {
    const updatedTodos = [...todos].map(todo => {
      if (todo.id === id) {
        todo.text = editText;
      }
      return todo;
    });
    setEditText('');
    setEditingMode(null);
  };

  const toggleComplete = id => {
    const updatedTodos = [...todos].map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <main style={{ margin: '0 auto', maxWidth: '650px' }}>
      <section className='add-todo'>
        <h1>ToDos</h1>
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
            style={{
              padding: '1rem',
              border: '1px solid #444444',
              borderRadius: '4px',
              margin: '2rem auto',
            }}>
            <input
              id='completed'
              type='checkbox'
              onChange={() => toggleComplete(todo.id)}
              checked={todo.completed}
            />
            <label htmlFor='completed'>
              {todo.completed ? 'Complete!' : 'Completed?'}
            </label>
            <br />
            {editingMode === todo.id ? (
              <input
                type='text'
                onChange={e => setEditText(e.target.value)}
                value={editText}
              />
            ) : (
              <p>
                {todo.text || (
                  <span style={{ color: 'grey', fontStyle: 'italic' }}>
                    Empty todo
                  </span>
                )}
              </p>
            )}
            {editingMode === todo.id ? (
              <button onClick={() => handleEdit(todo.id)}>Confirm edit</button>
            ) : (
              <button type='text' onClick={() => setEditingMode(todo.id)}>
                Edit
              </button>
            )}
            <button type='text' onClick={() => handleDelete(todo.id)}>
              Delete
            </button>
          </article>
        ))}
      </section>
    </main>
  );
}
