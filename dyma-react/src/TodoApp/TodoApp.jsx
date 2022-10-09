import React from "react";
import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function TodoApp() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (content) => {
    const todo = {
      id: crypto.randomUUID(),
      content,
      done: false,
      edit: false,
      selected: false
    };

    setTodoList([...todoList, todo]);
  };

  const deleteTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodoList(
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
    setTodoList(
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

  const editTodo = (id, content) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            content, 
            edit: false,
          };
        }
        return todo;
      })
    );
  };

  const selectTodo = (id) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            selected: !todo.selected,
          };
        } else {
          return {
            ...todo,
            selected: false,
          };
        }
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
          editTodo={editTodo}
          selectTodo={selectTodo}
        />
      </div>
    </div>
  );
}

export default TodoApp;
