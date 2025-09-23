import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import './App.css';

const ThemeComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={`app ${theme}`}>
      <h1>Theme Toggle with Context</h1>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"}
      </button>
    </div>
  );
};

export default ThemeComponent;
