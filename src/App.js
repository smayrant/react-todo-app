import React, { Component } from "react";
import Todos from "./Todos";

class App extends Component {
  state = {
    todos: [{ id: 1, content: "buy milk" }, { id: 2, content: "play game" }]
  };

  // remove any todo's whose id is equal to the id of the todo that had its delete button clicked on
  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    // the state of the old todo's is updated using es6 syntax
    this.setState({ todos });
  };

  // deleteTodo = id => {
  //   const todos = this.state.todos.filter(todo => {
  //     return todo.id !== id;
  //   });
  //   this.setState({
  //     todos
  //   });
  // };

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todos</h1>
        {/* todos + deleteTodo are passed in as props to be available to Todos component */}
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
