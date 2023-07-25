import React, { useEffect, useState, useRef } from "react";

export default function Timer() {
  let intervalRef = useRef();
  const [timer, setTimer] = useState(0);
  const [pausedVal, setPv] = useState(0);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [timer]);
  return (
    <div>
      <div>{timer}</div>
      <button
        onClick={() => {
          setPv(timer);
          clearInterval(intervalRef.current);
        }}
      >
        stop
      </button>
      <button
        onClick={() => {
          setTimer(pausedVal);
          intervalRef.current = setInterval(() => {
            setTimer(timer + 1);
          }, 1000);
        }}
      >
        play
      </button>
      <button
        onClick={() => {
          setTimer(0);
          intervalRef.current = 0;
        }}
      >
        reset
      </button>
    </div>
  );
}
