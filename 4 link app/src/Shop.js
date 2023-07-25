import React, { useState, useEffect } from "react";
import axios from "axios";

export const Shop = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getCategories = async () => {
      let response = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      setCategories(response.data);
    };
    getCategories();
  }, []);
  const handleClick = async (category) => {
    let response = await axios.get(
      `https://fakestoreapi.com/products/category/${category}`
    );
    setProducts(response.data);
  };
  return (
    <div>
      <h2>My Shop</h2>
      {categories.length === 0 && <div>Loading...</div>}
      {categories.map((category) => {
        return (
          <div>
            <button onClick={() => handleClick(category)}>{category}</button>
          </div>
        );
      })}
      {products.map((product) => {
        return (
          <div>
            {product.title}
            <img
              style={{ width: "30px" }}
              alt={product.id}
              src={product.image}
            />
          </div>
        );
      })}{" "}
    </div>
  );
};
