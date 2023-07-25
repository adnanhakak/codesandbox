import React, { useState, useEffect } from "react";
import axios from "axios";

export const Items = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      let response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(
        response.data.filter((x, index) => {
          return index < 5;
        })
      );
    };
    getUsers();
  });

  return (
    <div>
      <h3>List of items</h3>
      {users.length === 0 && <div>Loading...</div>}
      {users?.map((user) => {
        return (
          <div key={user.id} style={{ border: "1px solid red" }}>
            <ul>
              <li>
                <div>
                  <b>{user.name}</b>
                </div>
                <div>{user.email}</div>
                <div>{user.phone}</div>
                <div>{user.website}</div>
                <div>{user.address.street}</div>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};
