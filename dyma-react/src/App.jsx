import { useState } from "react";
import "./App.scss";
import Button from "./Button";
import Articles from "./components/Articles";
import Counter from "./Counter";
import Form from "./Form";
import Hello from "./Hello";
import TodoAppAPI from "./TodoAppAPI/TodoAppAPI";
import TodoApp from "./TodoApp/TodoApp";

function App() {
  console.log("render app");
  const [count, setCount] = useState(0);

  const handleClick = (e, name) => {
    console.log("OHHH MERCIII", e.target, name);
    setCount(count + 1);
  };

  const handleInput = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="App">
      <div>
        <TodoAppAPI />
        <hr />
        <hr />
        <TodoApp />
        <hr />
        <hr />
        <Form />
        <hr />
        <Button onClick={handleClick} />
        <button onClick={(e) => handleClick(e, "Angel")}>
          Click : {count} fois
        </button>
        <Counter count={count} />
        <input type="text" onInput={handleInput} />
      </div>
      <Articles display={true} />
      <Hello name="Leonel" age={18} />
    </div>
  );
}

export default App;
