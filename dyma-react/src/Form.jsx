import React, { useState, Fragment } from "react";

function Form() {
  const [user, setUser] = useState({
    name: "",
    age: null,
  });

  const [userList, setUserList] = useState([
    {
      name: "Leonel",
      age: 18,
    },
  ]);

  const handleClick = (e) => {
    e.preventDefault();
    setUserList([...userList, { ...user }]);
    console.log(user);
  };

  const handleInputName = (e) => {
    setUser({ ...user, name: e.target.value });
  };

  const handleInputAge = (e) => {
    setUser({ ...user, age: e.target.value });
  };

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleDeleteUser = (index) => {
    // const newUserList = [...userList];
    // newUserList.splice(index, 1);
    // setUserList(newUserList);

    setUserList(userList.filter((user, i) => i !== index));
  };

  const handleSortAge = () => {
    setUserList([...userList].sort((a, b) => a.age - b.age));
  };

  const handleSortName = () => {
    setUserList([...userList].sort((a, b) => a.name.localeCompare(b.name)));
  };

  const handleEdit = (index) => {};

  return (
    <div>
      <form>
        <input
          onInput={handleInput}
          name="name"
          type="text"
          placeholder="Nom"
        />
        <input
          onInput={handleInput}
          name="age"
          type="number"
          placeholder="Age"
        />
        <button onClick={handleClick}>Envoyer</button>
      </form>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <button onClick={handleSortAge}>Trier la liste par age</button>
        <button onClick={handleSortName}>Trier la liste par nom</button>
      </div>

      <div>
        {userList.map((user, index) => (
          <h3
            key={index}
            style={{ backgroundColor: "#2096F3", padding: "25px" }}
          >
            <span
              //   onClick={openModalEdit}
              style={{ backgroundColor: "#111", padding: "10px" }}
            >
              {user.name} - {user.age}
            </span>
            <span
              onClick={(e) => handleDeleteUser(index)}
              style={{
                backgroundColor: "red",
                padding: "10px",
                margin: "20px",
                cursor: "pointer",
              }}
            >
              X
            </span>
          </h3>
        ))}
      </div>
    </div>
  );
}

export default Form;
