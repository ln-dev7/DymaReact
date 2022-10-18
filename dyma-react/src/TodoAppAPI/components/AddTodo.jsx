import React, { useState } from "react";

function AddTodo({ addTodo }) {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleClick = () => {
    if (value.length) {
      addTodo(value);
      setValue("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && value.length) {
      handleClick();
    }
  };
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => handleChange(e)}
        onKeyDown={handleKeyDown}
        placeholder="Ajouter une todo"
      />
      <button onClick={handleClick}>Ajouter</button>
    </div>
  );
}

export default AddTodo;
