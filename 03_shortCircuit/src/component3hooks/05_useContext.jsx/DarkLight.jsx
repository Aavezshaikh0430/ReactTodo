import React from "react";
import { Children, createContext, useContext, useState, use } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const handleSwitchButton = () => {
    return setTheme((preThem) => (preThem === "dark" ? "light" : "dark"));
  };
  return (
    <ThemeContext.Provider
      value={{ theme: theme, handleSwitchButton: handleSwitchButton }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = use(ThemeContext);
  return context;
};

//Creating a component

export const DarkLight = () => {
  const { theme, handleSwitchButton } = useThemeContext();
  return (
    <>
      <div
        className={`p-4 flex flex-col justify-center items-center h-lvh ${
          theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
        }`}
      >
        <h1 className="text-4xl my-4 text-center">
          Switch Dark and Light Theme.
        </h1>
        <p className="text-xl my-4">Welcome to React Theme. </p>
        <button
          onClick={handleSwitchButton}
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-md mt-4 p-4 text-2xl"
        >
          {theme === "dark" ? "Switch to light Mode" : "Switch to Dark Mode"}
        </button>
      </div>
    </>
  );
};
