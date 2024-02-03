import React, { useState } from 'react';
import './App.css';


function App() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');
  const [todoStatus, setTodoStatus] = useState('all');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo App</h1>
      </header>
    </div>
  );  
}

export default App;
