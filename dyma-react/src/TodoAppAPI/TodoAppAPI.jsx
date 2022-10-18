import React from "react";
import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function TodoAppAPI() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (todo) => {
    setTodoList([...todoList, todo]);
  };

  const deleteTodo = (_id) => {
    setTodoList(todoList.filter((todo) => todo._id !== _id));
  };

  const toggleTodo = (_id) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo._id === _id) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      })
    );
  };

  const toggleTodoEdit = (_id) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo._id === _id) {
          return {
            ...todo,
            edit: !todo.edit,
          };
        }
        return todo;
      })
    );
  };

  const editTodo = (_id, content) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo._id === _id) {
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

  const selectTodo = (_id) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo._id === _id) {
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
      <h1>CHAP 11 - TODOLIST Avec API</h1>
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

export default TodoAppAPI;
