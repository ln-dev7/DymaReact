import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function TodoApp() {
  return (
    <div>
      <h1>CHAP 9 - TODOLIST</h1>
      <div>
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
}

export default TodoApp;
