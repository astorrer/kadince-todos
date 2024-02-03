import React, { useState } from 'react';
import './App.css';


function App() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');
  const [todoStatus, setTodoStatus] = useState('all');

  function addTodo(event) {
    if (todoInput) {
      event.preventDefault(); // Prevent the page from refreshing
      setTodos([...todos, { text: todoInput, status: 'pending' }]);
      setTodoInput(''); // Clear the input field
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo App</h1>
        <div>
          <form>
            <input type="text" value={todoInput} onChange={(e) => setTodoInput(e.target.value)} />
            <button type="submit" onClick={addTodo}>Add</button>
          </form>
        </div>
      </header>
    </div>
  );  
}

export default App;
