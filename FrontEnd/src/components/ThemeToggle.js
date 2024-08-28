// components/ThemeToggleButton.js

import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa"; // Font Awesome icons

const ThemeToggleButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check local storage for saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button onClick={toggleTheme} className="icon-button">
      {isDarkMode ? (
        <FaSun className="w-[20px] h-[20px]" />
      ) : (
        <FaMoon className="w-[20px] h-[20px]" />
      )}
    </button>
  );
};

export default ThemeToggleButton;
