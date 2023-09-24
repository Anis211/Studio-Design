import {
  Box,
  CircularProgress,
  Typography,
  Button,
  Grow,
  Link,
  Paper,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../theme.js";
import { useQuery } from "react-query";
import axios from "axios";
import { Link as RouterLink } from "react-router-dom";

export default function Service() {
  const client = axios.create({
    baseURL: "http://localhost:4000/",
  });

  const {
    isLoading: isLoadingServices,
    data: dataServices,
    error: errorServices,
    isError: isErrorServices,
  } = useQuery(
    "services",
    () => {
      return client.get("services");
    },
    {
      cacheTime: 5000,
      staleTime: 10000,
      refetchOnWindowFocus: true,
      refetchInterval: 10000,
    }
  );

  const { data, isLoading, isError, error } = useQuery(
    "icons",
    () => {
      return client.get("icons");
    },
    {
      cacheTime: 5000,
      staleTime: 10000,
      refetchOnWindowFocus: true,
      refetchInterval: 10000,
    }
  );

  if (isLoadingServices && isLoading) {
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
              {isLoadingServices ? "Loading Services..." : "Loading Icons..."}
            </Typography>
          </Box>
        </Grow>
      </ThemeProvider>
    );
  }

  if (isErrorServices || isError) {
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
          <Typography variant="bodyParagraph">
            {isErrorServices ? errorServices.message : error.message}
          </Typography>
          <Typography variant="bodyParagraph">
            (Try to refresh the page!)
          </Typography>
        </Box>
      </ThemeProvider>
    );
  }

  return (
    <Paper
      elevation={3}
      sx={{
        height: "1050px",
        width: "1200px",
        paddingTop: "20px",
        borderRadius: "25px",
        margin: "80px 0px 50px 80px",
      }}
    >
      <ThemeProvider theme={theme}>
        <Box
          className="services"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            position: "absolute",
            marginTop: "80px",
            marginLeft: "150px",
          }}
        >
          {dataServices?.data.map((service) => (
            <>
              <Box
                className="service"
                id={`service/${service.id}`}
                sx={{
                  width: "900px",
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "50px",
                }}
              >
                <Typography variant="header" sx={{ marginBottom: "20px" }}>
                  {service.header}{" "}
                  <img
                    src={service.icon}
                    style={{
                      width: "30px",
                      height: "30px",
                    }}
                  />
                </Typography>
                <Typography variant="bodyParagraph">{service.body}</Typography>
              </Box>
            </>
          ))}
        </Box>
        <Box
          className="icons"
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "30px",
            position: "absolute",
            marginLeft: "330px",
            marginTop: "850px",
          }}
        >
          {data.data.map((icon) => {
            const background = icon.background;
            return (
              <>
                <Paper
                  elevation={3}
                  sx={{
                    borderRadius: "20px",
                  }}
                >
                  <Button
                    className="iconLink"
                    variant="expanded"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "center",
                      backgroundColor: background,
                      borderRadius: "20px",
                      padding: "20px",
                    }}
                  >
                    <Link component={RouterLink} to={`/service${icon.link}`}>
                      <img
                        src={icon.url}
                        style={{ width: "74px", height: "74px" }}
                      />
                    </Link>
                  </Button>
                </Paper>
              </>
            );
          })}
        </Box>
      </ThemeProvider>
    </Paper>
  );
}
