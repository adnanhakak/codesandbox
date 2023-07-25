import React, { useReducer } from "react";

let initialState = { firstCounter: 0, secondCounter: 10 };
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + 1 };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - 1 };
    case "reset":
      return initialState;
    case "incSecondCounter":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "increment10":
      return { ...state, firstCounter: state.firstCounter + action.value };
    default:
      return state;
  }
};

export default function CounterTwo() {
  const [newValue, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <h3>Counter two Component</h3>
      {newValue.firstCounter}

      <br />
      {newValue.secondCounter}
      <br />
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "increment10", value: 10 })}>
        Inc10
      </button>
      <button
        onClick={() => dispatch({ type: "incSecondCounter", value: 1000 })}
      >
        inc 1000
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}
