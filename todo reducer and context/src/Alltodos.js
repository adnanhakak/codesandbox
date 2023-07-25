import React, { useContext } from "react";
import EachTodo from "./EachTodo";
import { TodoContext } from "./App";

export default function Alltodos() {
  const todoContext = useContext(TodoContext);
  return (
    <div className="App">
      {todoContext.state.map((todo, i) => {
        return (
          <div key={i}>
            <EachTodo {...todo} />
          </div>
        );
      })}
    </div>
  );
}
