import React from "react";

export const ThemeContext = React.createContext({
  theme: "light",
  toggleTheme: () => {},
});

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = React.useState("light");

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  const contextValue = {
    theme: theme,
    toggleTheme: toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}
