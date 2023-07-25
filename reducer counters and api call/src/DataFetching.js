import React, { useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
  loading: false,
  err: "",
  title: ""
};
const reducer = (state, action) => {
  switch (action.type) {
    case "Success":
      return {
        loading: false,
        err: "",
        title: action.payload
      };
    case "Failure":
      return {
        loading: true,
        err: "something went wrong",
        title: "err"
      };
    default:
      return state;
  }
};

export default function DataFetching() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        dispatch({ type: "Success", payload: res.data.title });
      })
      .catch((err) => {
        dispatch({ type: "Failure" });
      });
  }, []);
  return <div>{state.title}</div>;
}
