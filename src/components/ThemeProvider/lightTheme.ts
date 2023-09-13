import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
  components: {
    MuiFormHelperText: {
      styleOverrides: {
        contained: {
          marginRight: 0,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontSize: 20,
          fontWeight: "normal",
        },
        input: {
          fontSize: 20,
          fontWeight: "normal",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          paddingTop: 0,
          paddingBottom: 0,
          "&.Mui-disabled": {
            "&:hover": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(0, 0, 0, 0.26)",
              },
            },
          },
        },
        input: {
          paddingTop: 10.5,
          paddingBottom: 10.5,
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          "& .MuiTextField-root": {
            "& .MuiOutlinedInput-root": {
              paddingTop: 7,
              paddingBottom: 7,
              input: {
                paddingTop: 3.5,
                paddingBottom: 3.5,
              },
            },
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          top: -2,
          fontWeight: "normal",
          lineHeight: "16px",
          fontSize: 16,
        },
        shrink: {
          transform: "translate(14px, -7px) scale(0.75)",
          fontWeight: "normal",
          fontSize: 16,
          lineHeight: "1.4375em",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          fontWeight: "normal",
          paddingTop: 10.5,
          paddingBottom: 10.5,
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontWeight: "normal",
        },
        filled: {
          color: "rgba(0, 0, 0, 0.54)",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontWeight: "normal",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
        sizeLarge: {
          height: 48,
        },
      },
    },
  },
});

export default lightTheme;
