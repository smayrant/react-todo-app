import React, { Component } from "react";
import Todos from "./Todos";
import AddTodo from "./AddTodo";

class App extends Component {
  state = {
    todos: []
  };

  // remove any todo's whose id is equal to the id of the todo that had its delete button clicked on
  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    // the state of the old todo's is updated using es6 syntax
    this.setState({ todos });
  };

  addTodo = todo => {
    // generate a random, (likely) unique id to each todo
    todo.id = Math.random();
    // contents of old todos array is stored in todos variable using spread operator and new todo is passed in
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
  };

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todos</h1>
        {/* todos and deleteTodo are passed in as props to be available to Todos component */}
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />

        {/* addTodo is passed in as a prop to be available in AddTodo component */}
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
