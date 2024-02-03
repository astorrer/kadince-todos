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

  function markAsComplete(index) {
    const newTodos = [...todos];
    newTodos[index].status = newTodos[index].status === 'completed' ? 'pending' : 'completed';
    setTodos(newTodos);
  }

  function deleteTodo(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Kadince Todo App</h1>
        <div>
          <form>
            <input type="text" value={todoInput} onChange={(e) => setTodoInput(e.target.value)} />
            <button type="submit" onClick={addTodo}>Add</button>
          </form>
        </div>
        <div>
          <ul>
            {todos.map((todo, index) => {
              // Display all todos
              return (
                <li key={index}>{todo.text} 
                <button onClick={() => markAsComplete(index)}>Task is {todo.status}.</button>
                <button onClick={() => deleteTodo(index)}>Delete</button>
                </li>);
            })}
          </ul>
        </div>
      </header>
    </div>
  );  
}

export default App;
