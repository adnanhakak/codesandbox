import React, { useContext, useState } from "react";
import { TodoContext } from "./App";

export default function EachTodo(props) {
  const [edit, setEdit] = useState(false);
  const [editValue, setEditValue] = useState(props.description);
  const todoContext = useContext(TodoContext);

  const handleDelete = (details) => {
    todoContext.dispatch({
      type: "delete",
      payload: details
    });
    setEdit(false);
  };

  const handleCheck = (details) => {
    // setIsChecked(!isChecked); works directly also but using context and reducer
    todoContext.dispatch({
      type: "check",
      payload: details
    });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    todoContext.dispatch({
      type: "edit",
      payload: { editValue, id: props.id }
    });
    setEdit(false);
  };

  return (
    <div
      className="App"
      style={{ width: "400px", height: "70px", border: "1px solid red" }}
    >
      <span>
        {" "}
        <input
          type="checkbox"
          onChange={() => handleCheck(props)}
          checked={props.checked}
        />
      </span>
      <span className={props.checked ? "checked" : ""}>
        {props.description}
      </span>
      <span>
        <button onClick={() => handleDelete(props)}>delete</button>
        {edit && <button onClick={() => setEdit(false)}>cancel</button>}

        {!edit && <button onClick={() => setEdit(true)}>edit</button>}
        {edit && (
          <form onSubmit={handleEditSubmit}>
            <input
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
            />
          </form>
        )}
      </span>
    </div>
  );
}
