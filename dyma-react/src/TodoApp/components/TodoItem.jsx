import React from "react";

function TodoItem({ todo, deleteTodo }) {
  const handleDelete = () => {
    deleteTodo(todo.id);
  };
  return (
    <li className="todo-item">
      <span>{todo.content}</span>
      <button>Valider</button>
      <button>Modifier</button>
      <button onClick={handleDelete}>Supprimer</button>
    </li>
  );
}

export default TodoItem;
