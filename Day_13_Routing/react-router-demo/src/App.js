import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

import "./App.css";


import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <div className="app">
      <nav style={{ padding: 12, borderBottom: "1px solid #ddd" }}>
        <NavLink
          to="/"
          end
          style={({ isActive }) => ({
            marginRight: 12,
            color: isActive ? "blue" : "black",
          })}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => ({
            marginRight: 12,
            color: isActive ? "blue" : "black",
          })}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          style={({ isActive }) => ({
            color: isActive ? "blue" : "black",
          })}
        >
          Contact
        </NavLink>
      </nav>

      <main style={{ padding: 12 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
