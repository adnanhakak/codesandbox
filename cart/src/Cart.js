import React, { useEffect, useState, useContext } from "react";
import { FoodContext } from "./App";
import { UserContext } from "./App";

export default function Cart(props) {
  const getUserContext = useContext(UserContext);
  const foodContext = useContext(FoodContext);

  console.log("context", foodContext);

  function createItem() {
    foodContext.setFoodItems([
      ...foodContext.foodItems,
      {
        name: "Shirmaal",
        qty: [1, 2, 3, 4, 5],
        size: [{ small: 20 }, { medium: 40 }, { large: 80 }]
      }
    ]);
  }
  function calculatePrice() {
    return props.cart.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.priceEach * currentValue.quantity,
      0
    );
  }
  useEffect(() => {
    console.log("abcg", getUserContext);
    if (getUserContext.user) {
      createItem();
    }
  }, [getUserContext.user]);

  return (
    <div>
      <hr />
      {props.cart.map((item) => {
        return (
          <div>
            name: {item.item}--- quantity: {item.quantity}--- price:{" "}
            {item.priceEach}--- size: {item.size}
            <hr />
          </div>
        );
      })}
      <hr />
      <div>total Price:{calculatePrice()}</div>
      <button onClick={createItem}>Create Special order shirmaal</button>
    </div>
  );
}
