import React from "react";
import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function TodoApp() {
  const [todoList, seTodoList] = useState([]);

  const addTodo = (content) => {
    const todo = {
      id: crypto.randomUUID(),
      content,
      done: false,
      edit: false,
    };

    seTodoList([...todoList, todo]);
  };

  const deleteTodo = (id) => {
    seTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>CHAP 9 - TODOLIST</h1>
      <div>
        <AddTodo addTodo={addTodo} />
        <TodoList todoList={todoList} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
}

export default TodoApp;
