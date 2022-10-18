import React from "react";
import EditTodo from "./EditTodo";
import TodoItem from "./TodoItem";

function TodoList({
  todoList,
  deleteTodo,
  toggleTodo,
  toggleTodoEdit,
  editTodo,
  selectTodo,
}) {
  return todoList.length ? (
    <ul>
      {todoList.map((todo) =>
        todo.edit ? (
          <EditTodo
            cancelEditTodo={() => toggleTodoEdit(todo._id)}
            key={todo._id}
            todo={todo}
            editTodo={(content) => editTodo(todo._id, content)}
          />
        ) : (
          <TodoItem
            key={todo._id}
            todo={todo}
            toggleTodoEdit={toggleTodoEdit}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
            selectTodo={selectTodo}
          />
        )
      )}
    </ul>
  ) : (
    <p>Aucune todo pour le moment</p>
  );
}

export default TodoList;
