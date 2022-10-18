import React, { useState } from "react";

function AddTodo({ addTodo }) {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  async function handleClick() {
    if (value.length) {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch("https://restapi.fr/api/reacttodo", {
          method: "POST",
          body: JSON.stringify({
            content: value,
            edit: false,
            done: false,
          }),
          headers: {
            "Content-type": "application/json",
          },
        });
        if (response.ok) {
          const todo = response.json();
          addTodo(todo);
        } else {
          setError("Oops une erreur");
        }
      } catch (e) {
        console.log(e);
        setError("Oops une erreur");
      } finally {
        setLoading(false);
      }
      setValue("");
    }
  }

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
      <button onClick={handleClick}>
        {loading ? "Chargement ...." : "Ajouter"}
      </button>
      {error !== null && (
        <p style={{ background: "red", color: "white" }}>{error}</p>
      )}
    </div>
  );
}

export default AddTodo;
