import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, login, logout } = useContext(AuthContext);

  return (
    <header className={`header ${theme}`}>
      <h1>Productivity Dashboard</h1>
      <div>
        <button onClick={toggleTheme}>
          {theme === "light" ? "🌞" : "🌙"}
        </button>
        {user ? (
          <>
            <span>Welcome, {user.name}</span>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <button onClick={() => login("Nikhil")}>Login</button>
        )}
      </div>
    </header>
  );
}
