import { Box, Typography, Button, Link, Paper } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../theme.js";
import { Link as RouterLink } from "react-router-dom";
import { useServiceLoader } from "./useLoader.jsx";
import { LoadingState, ErrorState } from "./States.jsx";

export default function Service() {
  const services = useServiceLoader();

  if (services.isLoading) {
    return <LoadingState />;
  }

  if (services.isError) {
    return <ErrorState error={services.error} />;
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
          {services.data?.data.map((service) => (
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
          {services.data?.data.map((service) => {
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
