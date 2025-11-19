import React, { useContext } from "react";
import ThemeContext from "../ThemeContext";

function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <h2>Welcome to Theme App</h2>
      <p>The current theme is: {theme}</p>
    </div>
  );
}

export default Home;
