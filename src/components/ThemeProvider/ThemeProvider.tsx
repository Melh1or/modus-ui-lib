import React from "react";

import { ThemeProvider as MaterialThemeProvider } from "@mui/material/styles";

import darkTheme from "./darkTheme";
import lightTheme from "./lightTheme";

type ThemeTypes = "light" | "dark";

interface ThemeProviderProps {
  theme: ThemeTypes;
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme,
  children,
}) => {
  const themeType = theme === "dark" ? darkTheme : lightTheme;

  return (
    <MaterialThemeProvider theme={themeType}>{children}</MaterialThemeProvider>
  );
};
