import { Box, Typography, Grow, CircularProgress } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../theme";

export function LoadingState() {
  return (
    <ThemeProvider theme={theme}>
      <Grow in={true} timeout={1000}>
        <Box
          className="loading"
          sx={{
            backgroundColor: "#FFF7E3",
            width: "300px",
            height: "100px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
            borderRadius: "30px",
            margin: "120px 0 60px 500px",
          }}
        >
          <CircularProgress color="warning" size="60px" />
          <Typography
            variant="header1"
            color="warning"
            size="30px"
            sx={{ marginTop: "10px" }}
          >
            {"Loading Services..."}
          </Typography>
        </Box>
      </Grow>
    </ThemeProvider>
  );
}

export function ErrorState(error) {
  return (
    <ThemeProvider theme={theme}>
      <Box
        className="error"
        sx={{
          backgroundColor: "#FFF7E3",
          width: "300px",
          height: "100px",
          display: "flex",
          flexDirection: "column",
          columnGap: "10px",
          alignItems: "center",
          padding: "20px",
          margin: "120px 0 60px 500px",
          borderRadius: "25px",
        }}
      >
        <Typography variant="header">Error</Typography>
        <Typography variant="bodyParagraph">{error.message}</Typography>
        <Typography variant="bodyParagraph">
          (Try to refresh the page!)
        </Typography>
      </Box>
    </ThemeProvider>
  );
}
