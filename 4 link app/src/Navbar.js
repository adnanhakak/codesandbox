import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/app">Todo</NavLink>
        </li>
        <li>
          <NavLink to="/shop">My Shop</NavLink>
        </li>
        <li>
          <NavLink to="/items">Users</NavLink>
        </li>
        <li>
          <NavLink to="/dropdown">Dropdown</NavLink>
        </li>
      </ul>
    </nav>
  );
};
