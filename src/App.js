import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
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
    <div className="App" class="container">
      <div class="container mb-4 mt-4">
        <h1>Kadince Todo App</h1>
        <div class="card mb-4">
          <div class="card-body">
            <form>
              <div class="row g-3 align-items-center">
                <div class="col-auto">
                  <label for="todoInput" class="col-form-label">Enter a todo:</label>
                </div>
                <div class="col-auto">
                  <input type="text" value={todoInput} onChange={(e) => setTodoInput(e.target.value)} class="form-control"/>
                </div>
                <div class="col-auto">
                  <button type="submit" onClick={addTodo} class="btn btn-primary">Add</button>
                </div>
                <div class="col-auto">
                  <label for="todoStatus" class="col-form-label">Filter:</label>
                </div>
                <div class="col-auto">
                  <select value={todoStatus} onChange={(e) => setTodoStatus(e.target.value)} class="form-select">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="pending">Pending</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <h3>Your Todos</h3>
          </div>
          <div class="card-body">
            <ul class="list-group">
              {todos.map((todo, index) => {
                // Display all todos
                if (todoStatus === 'all') {
                  return (
                    <li key={index} class="list-group-item">
                      <div class="row">
                        <div class="col-8">
                          <p>
                            {todo.text} 
                          </p>
                        </div>
                        <div class="col-auto text-center">
                          <div className="btn-group" role="group">
                            <button onClick={() => markAsComplete(index)} className="btn btn-primary">Task is {todo.status}.</button>
                            <button onClick={() => editTodo(index)} className="btn btn-secondary">Edit</button>
                            <button onClick={() => deleteTodo(index)} className="btn btn-danger">Delete</button>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                }
                // Display only completed todos
                if (todoStatus === 'completed' && todo.status === 'completed') {
                  return (
                    <li key={index} class="list-group-item">
                      <div class="row">
                        <div class="col-8">
                          <p>
                            {todo.text} 
                          </p>
                        </div>
                        <div class="col-auto text-center">
                          <div className="btn-group" role="group">
                            <button onClick={() => markAsComplete(index)} className="btn btn-primary">Task is {todo.status}.</button>
                            <button onClick={() => editTodo(index)} className="btn btn-secondary">Edit</button>
                            <button onClick={() => deleteTodo(index)} className="btn btn-danger">Delete</button>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                }
                // Display only pending todos
                if (todoStatus === 'pending' && todo.status === 'pending') {
                  return (
                    <li key={index} class="list-group-item">
                      <div class="row">
                        <div class="col-8">
                          <p>
                            {todo.text} 
                          </p>
                        </div>
                        <div class="col-auto text-center">
                          <div className="btn-group" role="group">
                            <button onClick={() => markAsComplete(index)} className="btn btn-primary">Task is {todo.status}.</button>
                            <button onClick={() => editTodo(index)} className="btn btn-secondary">Edit</button>
                            <button onClick={() => deleteTodo(index)} className="btn btn-danger">Delete</button>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
          <div class="card-footer">
            <p>
              <strong>Total Todos:</strong> {todos.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );  
}

export default App;
