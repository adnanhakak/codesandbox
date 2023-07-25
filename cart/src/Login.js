import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "./App";

export default function Login(props) {
  const getUserContext = useContext(UserContext);
  const loginorOut = () => {
    if (!getUserContext.user) {
      getUserContext.setUser("Adnan");
    } else {
      getUserContext.setUser("");
    }
  };
  return (
    <button onClick={loginorOut}>
      {!getUserContext.user ? "login" : "logout"}
    </button>
  );
}
