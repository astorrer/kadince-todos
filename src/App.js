import React, { useState } from 'react';
import './App.css';


function App() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');
  const [todoStatus, setTodoStatus] = useState('all');

  function addTodo(event) {
    event.preventDefault(); // Prevent the page from refreshing
    if (todoInput) {
      setTodos([...todos, { text: todoInput, status: 'pending' }]);
      setTodoInput(''); // Clear the input field
    }
  }

  function deleteTodo(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  function editTodo(index) {
    const newTodos = [...todos];
    let newText = prompt('Edit Todo', newTodos[index].text)
    if (!newText) {
      return;
    }
    newTodos[index].text = newText;
    setTodos(newTodos);
  }

  function markAsComplete(index) {
    const newTodos = [...todos];
    newTodos[index].status = newTodos[index].status === 'completed' ? 'pending' : 'completed';
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
            <select value={todoStatus} onChange={(e) => setTodoStatus(e.target.value)}>
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
            </select>
          </form>
        </div>
        <div>
          <ul>
            {todos.map((todo, index) => {
              // Display all todos
              if (todoStatus === 'all') {
                return (
                <li key={index}>{todo.text} 
                <button onClick={() => markAsComplete(index)}>Task is {todo.status}.</button>
                <button onClick={() => editTodo(index)}>Edit</button>
                <button onClick={() => deleteTodo(index)}>Delete</button>
                </li>);
              }
              // Display only completed todos
              if (todoStatus === 'completed' && todo.status === 'completed') {
                return (
                <li key={index}>{todo.text} 
                <button onClick={() => markAsComplete(index)}>Task is {todo.status}.</button>
                <button onClick={() => editTodo(index)}>Edit</button>
                <button onClick={() => deleteTodo(index)}>Delete</button>
                </li>);
              }
              // Display only pending todos
              if (todoStatus === 'pending' && todo.status === 'pending') {
                return (
                <li key={index}>{todo.text} 
                <button onClick={() => markAsComplete(index)}>Task is {todo.status}.</button>
                <button onClick={() => editTodo(index)}>Edit</button>
                <button onClick={() => deleteTodo(index)}>Delete</button>
                </li>);
              }
            })}
          </ul>
        </div>
      </header>
    </div>
  );  
}

export default App;
