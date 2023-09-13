import React from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import { ThemeProvider } from "../ThemeProvider";

import { useSnackbar as useDefaultSnackbar, SnackbarProvider } from "notistack";

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme="light">
        <SnackbarProvider
          preventDuplicate
          autoHideDuration={3000}
          maxSnack={3}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          {children}
        </SnackbarProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export const useSnackbar = useDefaultSnackbar;

// - ui
// - core (msal, hooks, utils, linting)
