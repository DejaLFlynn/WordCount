import React, { useState, useEffect } from "react";
import "./App.css";
import Counter from "./Components/Counter";

function App() {
  const storedDarkMode = localStorage.getItem("DARK_MODE");
  const [darkMode, setDarkMode] = useState(storedDarkMode);

  const toggleDarkMode = () => setDarkMode(darkMode ? false : true);

  useEffect(() => {
    localStorage.setItem("DARK_MODE", darkMode);
  }, [darkMode]);

  return (
    <div className="App" data-theme={darkMode ? "dark" : "light"}>
      Word Counter
      <Counter />
      <button onClick={toggleDarkMode}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
}

export default App;
