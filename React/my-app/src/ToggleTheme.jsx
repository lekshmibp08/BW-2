import React, { useState } from 'react'
import "./App.css";

const ToggleTheme = () => {
    const [theme, setTheme] = useState('light');

    const toggle = () => {
        setTheme((prev) => prev === 'light' ? 'dark' : 'light')
    }

  return (
    <div className={`app ${theme}`}>
      <h1>Theme Toggle Example</h1>
      <p>Current Theme: {theme}</p>
      <button onClick={toggle}>
        Switch to {theme === 'light' ? "Dark" : "Light"}
      </button>
    </div>
  )
}

export default ToggleTheme
