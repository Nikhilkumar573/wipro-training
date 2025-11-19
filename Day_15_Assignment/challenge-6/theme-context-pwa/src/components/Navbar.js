import React, { useContext } from "react";
import ThemeContext from "../ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav
      style={{
        padding: "10px",
        background: theme === "light" ? "#ddd" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <h3>Theme: {theme.toUpperCase()}</h3>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </nav>
  );
}

export default Navbar;
