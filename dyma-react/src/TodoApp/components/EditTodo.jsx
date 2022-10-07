import React, {useState} from 'react'

function EditTodo({todo, editTodo, cancelEditTodo }) {
  const [value, setValue] = useState(todo.content);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleClick = () => {
    if (value.length) {
      editTodo(value);
      setValue("");
    }
  };

  const handleClickCancelEdit = () => {
    cancelEditTodo()
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
      placeholder="Editer la todo"
    />
    <button onClick={handleClick}>Editer</button>
    <button onClick={handleClickCancelEdit}>Annuler</button>
  </div>
  )
}

export default EditTodo