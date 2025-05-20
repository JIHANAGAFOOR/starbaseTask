import React, { useEffect } from "react";
import { useAppSelector } from "../../store/slice/settings";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const darkMode = useAppSelector((state) => state.settings.darkMode);

  useEffect(() => {
    // Apply dark mode class to the document element
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return <>{children}</>;
};

export default ThemeProvider;
