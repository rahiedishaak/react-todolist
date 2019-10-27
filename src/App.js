import React, { Component } from 'react';
import './App.css';
import AddTodoForm from './AddTodoForm/AddTodoForm';
import Todo from './Todo/Todo';

class App extends Component {
  state = {todos: JSON.parse(localStorage.getItem('todos'))};

  fetchTodos = () => this.state.todos ? [...this.state.todos] : [];

  formSubmitHandler = event => {
    event.preventDefault();

    if (event.target.todoInputField.value) {
      const todo = {
        id: Math.floor(Math.random() * 1000000000),
        body: event.target.todoInputField.value,
        done: false
      };

      const todos = this.fetchTodos();
      todos.push(todo);
      localStorage.setItem('todos', JSON.stringify(todos));
      this.setState({todos: JSON.parse(localStorage.getItem('todos'))});
      event.target.todoInputField.value = '';
    }
  };

  completeTodoHandler = (event, index) => {
    const todos = this.fetchTodos();
    let todo = todos[index];
    todo = {
      id: todo.id,
      body: todo.body,
      done: event.target.checked
    };
    todos[index] = todo;
    localStorage.setItem('todos', JSON.stringify(todos));
    this.setState({todos: JSON.parse(localStorage.getItem('todos'))});    
  };

  deleteTodoHandler = index => {
    const todos = this.fetchTodos();
    todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(todos));
    this.setState({todos: JSON.parse(localStorage.getItem('todos'))});
  };

  render() {
    const todos = this.fetchTodos();

    const todoList = (
      <div>
        {todos.map((todo, index) => {
          return <Todo 
            key={todo.id}
            body={todo.body}
            done={todo.done}
            changed={event => this.completeTodoHandler(event, index)}
            deleted={() => this.deleteTodoHandler(index)} />
        })}
      </div>
    );

    return (
      <div className="App">
        <h1 className="heading-primary">Takenlijst</h1>
        <AddTodoForm submit={this.formSubmitHandler} />
        {todoList}
      </div>
    );
  }
}

export default App;
