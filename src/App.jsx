import React, { useState } from 'react';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    newTodo.trim() && setTodos([...todos, newTodo]) && setNewTodo('');
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto' }}>
      <h1 style={{ textAlign: 'left' }}>To-Do List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new task"
        style={{
          width: '100%', padding: '10px', boxSizing: 'border-box'
        }}
      />
      <button onClick={addTodo} style={{
        width: '100%',
        padding: '10px',
        marginTop: '10px',
        cursor: 'pointer',
      }} >Shto ne liste</button>
      <ul style={{ listStyleType: 'none', padding: 0, marginTop: '20px' }}>
        {todos.map((todo, index) => (
          <li key={index} style={{
            margin: '10px 0',
            padding: '10px',
            backgroundColor: 'black',
            border: '1px solid #ddd',
            display: 'flex',
            justifyContent: 'space-between',
          }}>
            {todo}
            <button
              style={{
                marginLeft: '10px',
                cursor: 'pointer',
              }}
              onClick={() => deleteTodo(index)}
            >
              Fshije
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;