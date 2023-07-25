import React, { useState, useContext } from "react";
import { TodoContext } from "./App";

export default function Form() {
  const todoContext = useContext(TodoContext);
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    let newTodo = { description: todo, id: Math.random(), checked: false };
    todoContext.dispatch({ type: "add", payload: newTodo });
    setTodo("");
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        add a todo{" "}
        <input value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button>add a todo</button>
      </form>
    </div>
  );
}
