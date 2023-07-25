import { Form } from "./Form";
import "./styles.css";
import Test from "./Test";
import React, { useEffect, useState, createContext } from "react";
import Card from "./Card";
import Cart from "./Cart";
import Login from "./Login";

export const FoodContext = createContext();
export const UserContext = createContext();

export default function App() {
  const [user, setUser] = useState("");
  const [foodItems, setFoodItems] = useState([
    {
      name: "Chicken roll",
      qty: [1, 2, 3, 4, 5],
      size: [{ small: 20 }, { medium: 40 }, { large: 80 }]
    },
    {
      name: "pizza",
      qty: [1, 2, 3, 4, 5],
      size: [{ small: 100 }, { medium: 200 }, { large: 400 }]
    },
    {
      name: "burger",
      qty: [1, 2, 3, 4, 5],
      size: [{ small: 100 }, { medium: 200 }, { large: 400 }]
    }
  ]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    console.log("cart", cart);
  }, [cart]);
  const handleCartAdd = (e, data, qty, size, name) => {
    const newItem = {
      item: data,
      quantity: qty,
      size: name,
      priceEach: size
    };

    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.item === newItem.item && item.size === newItem.size
      );
      if (existingItem) {
        // If an item with the same name and size exists, replace its quantity
        return prevCart.map((item) => {
          if (
            item.size === existingItem.size &&
            item.item === existingItem.item
          ) {
            item = {
              ...item,
              quantity: newItem.quantity
            };
          }
          return item;
        });
      } else {
        // If no matching item found, add the new item to the cart
        return [...prevCart, newItem];
      }
    });
  };

  const [show, setShow] = useState(false);
  function dataInParent(formData) {
    console.log("data came form child to parent", formData);
  }
  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>
        <FoodContext.Provider value={{ foodItems, setFoodItems }}>
          <div style={{ display: "flex", gap: "10px" }}>
            <h4>{user ? `${user}'s Cart` : "Please Login"}</h4>
            {foodItems.map((food) => {
              return <Card {...food} handleCartAdd={handleCartAdd} />;
            })}
          </div>
          <Form heading="login form" dataInParent={dataInParent} />
          {show && <Test setShow={setShow} show={show} />}
          <button onClick={(e) => setShow(!show)}>toggleShow</button>
          <Cart cart={cart} />
          <Login />
        </FoodContext.Provider>
      </UserContext.Provider>
    </div>
  );
}
