import { useState } from "react";
import { TodoList } from "./Todolist";
import "./styles.css";

export default function App() {
  const [allTodos, setAllTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault(); //to not refresh form onsubmit
    setAllTodos([
      ...allTodos,
      {
        name: todo,
        key: new Date().getMilliseconds(),
        isSelected: false,
        isEditing: false,
        isDone: false
      }
    ]);
    setTodo("");
  };
  return (
    <div className="App">
      <form onSubmit={(e) => handleSubmit(e)}>
        enter a todo
        <input value={todo} onChange={(e) => handleChange(e)} />
      </form>
      <TodoList
        todo={todo}
        setTodo={setTodo}
        allTodos={allTodos}
        setAllTodos={setAllTodos}
      />
    </div>
  );
}
