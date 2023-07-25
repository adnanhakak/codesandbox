import React, { useEffect, useState } from "react";

export default function Card(props) {
  const [size, setSize] = useState(Object.values(props.size[0])[0]);
  const [qty, setQty] = useState(1);
  const [name, setName] = useState(Object.keys(props.size[0])[0]);

  const handleSizeChange = (e) => {
    setName(e.target.options[e.target.selectedIndex].text);
    setSize(e.target.value);
  };

  const handleQtyChange = (e) => {
    setQty(e.target.value);
  };

  return (
    <div>
      <div
        style={{
          width: "200px",
          height: "200px",
          border: "1px solid red"
        }}
      >
        <h4>{props.name}</h4>
        Size :{" "}
        <select onChange={(e) => handleSizeChange(e)}>
          {props.size.map((item) => {
            return (
              <option name={Object.keys(item)} value={Object.values(item)}>
                {Object.keys(item)}
              </option>
            );
          })}
        </select>
        <br />
        Quantity:{" "}
        <select onChange={handleQtyChange}>
          {props.qty.map((item) => {
            return <option value={item}>{item}</option>;
          })}
        </select>
        <h5>price:{qty * size}</h5>
        <button
          onClick={(e) => {
            console.log(props.name, qty, size, name);
            props.handleCartAdd(e, props.name, qty, size, name);
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
