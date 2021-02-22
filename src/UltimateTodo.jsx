import React, { useState, useEffect } from 'react';

const UltimateTodo = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');
  const [todoEditing, setTodoEditing] = useState(null);
  const [todoEditingText, setTodoEditingText] = useState('');

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

  const deleteTodo = id => {
    const updatedTodos = [...todos].filter(todo => todo.id !== id);
    setTodos(updatedTodos);
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

  const editTodo = id => {
    const updatedTodos = [...todos].map(todo => {
      if (todo.id === id) {
        todo.text = todoEditingText;
      }
      return todo;
    });
    setTodos(updatedTodos);

    setTodoEditing(null);
    setTodoEditingText('');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          onChange={e => setTodo(e.target.value)}
          value={todo}
        />
        <button type='submit'>Add todo</button>
      </form>
      {todos.map(todo => (
        <article style={{ border: '1px solid #444444' }} key={todo.id}>
          {todoEditing === todo.id ? (
            <input
              type='text'
              onChange={e => setTodoEditingText(e.target.value)}
              value={todoEditingText}
            />
          ) : (
            <p>
              {todo.text || (
                <span style={{ color: 'grey', fontStyle: 'italic' }}>
                  Empty note
                </span>
              )}
            </p>
          )}
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          <input
            type='checkbox'
            onChange={() => toggleComplete(todo.id)}
            checked={todo.completed}
          />
          {todoEditing === todo.id ? (
            <button onClick={() => editTodo(todo.id)}>Submit Edits</button>
          ) : (
            <button
              onClick={() => {
                setTodoEditing(todo.id);
              }}>
              Edit Todo
            </button>
          )}
        </article>
      ))}
    </div>
  );
};

export default UltimateTodo;
