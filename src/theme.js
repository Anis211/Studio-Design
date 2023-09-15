import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#2639ED",
    },
  },
  typography: {
    header: {
      fontFamily: "Roboto, sans-serif",
      fontWeight: "700",
      fontSize: "40px",
    },
    bodyParagraph: {
      fontFamily: "Roboto, sans-serif",
      fontWeight: "300",
      fontSize: "16px",
      lineHeight: "160%",
    },
    body1: {
      fontFamily: "Roboto, sans-serif",
      fontWeight: "300",
      fontSize: "17.7px",
      lineHeight: "160%",
    },
    header1: {
      fontFamily: "Roboto, sans-serif",
      fontWeight: "700",
      fontSize: "24px",
    },
    button: {
      fontFamily: "Roboto, sans-serif",
      fontWeight: "400",
      fontSize: "16px",
      color: "white",
    },
    body2: {
      fontFamily: "Roboto, sans-serif",
      fontWeight: "300",
      fontSize: "15px",
      lineHeight: "22.40px",
    },
    header2: {
      fontFamily: "Roboto, sans-serif",
      fontWeight: "500",
      fontSize: "22px",
    },
  },
});
