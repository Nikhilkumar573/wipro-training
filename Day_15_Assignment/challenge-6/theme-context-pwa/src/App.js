import React, { useState, useEffect } from "react";
import ThemeContext from "./ThemeContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import WorkoutTracker from "./components/WorkoutTracker";
import Products from "./components/Products";

function App() {
  const [theme, setTheme] = useState("light");

  // Load theme from localStorage on first render
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Save theme to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const styles = {
    background: theme === "light" ? "#ffffff" : "#121212",
    color: theme === "light" ? "#000" : "#ffffff",
    minHeight: "100vh",
    padding: "20px",
    transition: "all 0.3s ease",
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div style={styles}>
          <Navbar />
          <Home />
          <WorkoutTracker />
        </div>
      </ThemeContext.Provider>

      
      <Products />
    </>
  );
}

export default App;
