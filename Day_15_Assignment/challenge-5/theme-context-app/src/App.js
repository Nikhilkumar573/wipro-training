import React, { useState, useEffect } from "react";
import ThemeContext from "./ThemeContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  const [theme, setTheme] = useState("light");

  // Load theme from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setTheme(saved);
  }, []);

  // Save to localStorage when theme changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme(theme === "light" ? "dark" : "light");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        style={{
          background: theme === "light" ? "#fff" : "#111",
          color: theme === "light" ? "#000" : "#fff",
          height: "100vh",
          padding: "20px",
        }}
      >
        <Navbar />
        <Home />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
