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

  const toggleTodo = (id) => {
    seTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      })
    );
  };

  const toggleTodoEdit = (id) => {
    seTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            edit: !todo.edit,
          };
        }
        return todo;
      })
    );
  };

  return (
    <div>
      <h1>CHAP 9 - TODOLIST</h1>
      <div>
        <AddTodo addTodo={addTodo} />
        <TodoList
          todoList={todoList}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          toggleTodoEdit={toggleTodoEdit}
        />
      </div>
    </div>
  );
}

export default TodoApp;
