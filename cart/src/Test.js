import React, { useEffect } from "react";

export default function Test() {
  useEffect(() => {
    console.log("mounted");

    return () => {
      console.log("unmounted");
    };
  }, []);
  return <div>Hello Anatolia</div>;
}
