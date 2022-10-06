import React from "react";
import EditTodo from "./EditTodo";
import TodoItem from "./TodoItem";

function TodoList({ todoList, deleteTodo, toggleTodo, toggleTodoEdit }) {
  return todoList.length ? (
    <ul>
      {todoList.map((todo) =>
        todo.edit ? (
          <EditTodo key={todo.id} />
        ) : (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodoEdit={toggleTodoEdit}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        )
      )}
    </ul>
  ) : (
    <p>Aucune todo pour le moment</p>
  );
}

export default TodoList;
