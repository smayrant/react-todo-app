import React from "react";

const Todos = ({ todos, deleteTodo }) => {
  // if there are todos, return them, else, return a message stating that there are no todo's left
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <span>
            {todo.content}{" "}
            <button
              onClick={() => {
                deleteTodo(todo.id);
              }}
              className="waves-effect waves-light btn-small blue"
            >
              Delete
            </button>
          </span>
        </div>
      );
    })
  ) : (
    <p className="center">You do not currently have any todo's</p>
  );
  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
