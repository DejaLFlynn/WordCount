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
    <div className="App" data-theme={darkMode ? "dark" : "light"} style={{height:'100vh', width:'100%'}}>
      <div className="word-counter-title" >

      Word Counter
      </div>
      <div className="body-word-counter">
      <Counter />
      <button onClick={toggleDarkMode} className="myButton">
        {darkMode ? "Switch to Sunrise Mode" : "Switch to Sunset Mode"}
      </button>
      </div>
    </div>
  );
}

export default App;
