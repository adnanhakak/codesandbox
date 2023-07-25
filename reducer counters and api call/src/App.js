import "./styles.css";

import CounterOne from "./CounterOne";
import CounterTwo from "./CounterTwo";
import DataFetching from "./DataFetching";
import Timer from "./Timer";

export default function App() {
  return (
    <div className="App">
      {" "}
      <h1> {/* <Timer /> */}</h1>
      <CounterOne />
      <CounterTwo />
      <h4>data fetching</h4>
      <DataFetching />
    </div>
  );
}
