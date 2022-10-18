import React from "react";

function TodoItem({
  todo,
  deleteTodo,
  toggleTodo,
  toggleTodoEdit,
  selectTodo,
}) {
  const handleDelete = (e) => {
    e.stopPropagation();
    deleteTodo(todo._id);
  };

  const handleTodoDone = (e) => {
    e.stopPropagation();
    toggleTodo(todo._id);
  };

  const handleTodoEdit = (e) => {
    e.stopPropagation();
    toggleTodoEdit(todo._id);
  };

  const handleSelectTodo = (e) => {
    e.stopPropagation();
    selectTodo(todo._id);
  };
  return (
    <li
      className={`todo-item ${todo.selected ? "selected" : ""}`}
      onClick={handleSelectTodo}
    >
      <span>{todo.content}</span>
      <button onClick={(e) => handleTodoDone(e)}>
        {todo.done ? "Terminée" : "En cours"}
      </button>
      <button onClick={(e) => handleTodoEdit(e)}>Modifier</button>
      <button onClick={(e) => handleDelete(e)}>Supprimer</button>
    </li>
  );
}

export default TodoItem;
