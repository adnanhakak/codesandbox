import Form from "./Form";
import "./styles.css";
import React, { createContext, useReducer } from "react";
import Alltodos from "./Alltodos";

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];

    case "delete":
      return state.filter((x) => x.id !== action.payload.id);

    case "check":
      return state.map((x) => {
        if (x.id === action.payload.id) {
          return { ...x, checked: !x.checked };
        } else {
          return x;
        }
      });

    case "edit":
      return state.map((x) => {
        if (x.id === action.payload.id) {
          return { ...x, description: action.payload.editValue };
        } else {
          return x;
        }
      });

    default:
      return state;
  }
};
export const TodoContext = createContext();
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <Form />
        <hr />
        <Alltodos />
      </div>
    </TodoContext.Provider>
  );
}
