import React, { useState, useEffect } from "react";
export default function Toggel() {
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      return storedTheme === "dark";
    }
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleToggle = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <button
      onClick={handleToggle}
      className="p-1 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg "
    >
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
}
