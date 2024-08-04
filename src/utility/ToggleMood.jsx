import React, { useEffect, useState } from "react";
import "./ToggleMood.css";
const ToggleMood = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : false;
  });

  useEffect(() => {
    document.body.className = isDarkMode
      ? "bg-dark text-light"
      : "bg-light text-dark";
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="toggle-switch">
      <label className="switch-label">
        <input type="checkbox" className="checkbox" onClick={toggleTheme} />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default ToggleMood;
