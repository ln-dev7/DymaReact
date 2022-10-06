import React from "react";

function TodoItem({ todo, deleteTodo, toggleTodo, toggleTodoEdit }) {
  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  const handleTodoDone = () => {
    toggleTodo(todo.id);
  };

  const handleTodoEdit = () => {
    toggleTodoEdit(todo.id);
  };
  return (
    <li className="todo-item">
      <span>{todo.content}</span>
      <button onClick={handleTodoDone}>
        {todo.done ? "Terminée" : "En cours"}
      </button>
      <button onClick={handleTodoEdit}>Modifier</button>
      <button onClick={handleDelete}>Supprimer</button>
    </li>
  );
}

export default TodoItem;
