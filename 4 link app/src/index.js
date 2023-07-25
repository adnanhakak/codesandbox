import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Items } from "./Items";
import { Shop } from "./Shop";
import { Dropdown } from "./Dropdown";

import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import { Navbar } from "./Navbar";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/app" element={<App />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/items" element={<Items />} />
        <Route path="/dropdown" element={<Dropdown />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
