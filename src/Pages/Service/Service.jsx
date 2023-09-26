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

  const params = {
    cacheTime: 5000,
    staleTime: 10000,
    refetchOnWindowFocus: true,
    refetchInterval: 10000,
  };

  const { isLoading, data, error, isError } = useQuery(
    "services",
    () => {
      return client.get("services");
    },
    params
  );

  if (isLoading) {
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

  if (isError) {
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
          {data?.data.map((service) => (
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
          {data?.data.map((service) => {
            const background = service.background;
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
                    <Link component={RouterLink} to={`/service/${service.id}`}>
                      <img
                        src={service.icon}
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
