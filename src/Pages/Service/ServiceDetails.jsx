import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { theme } from "../../theme";
import { ThemeProvider } from "@emotion/react";
import { useQuery } from "react-query";
import axios from "axios";

export default function Details() {
  const { serviceId } = useParams();

  const { data } = useQuery(`service:${serviceId}`, () => {
    return axios.get(`http://localhost:4000/services/${serviceId}`);
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        className="service-details"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          marginTop: "80px",
          marginLeft: "100px",
        }}
      >
        <Typography variant="header">{data?.data.header}</Typography>
        <Typography variant="bodyParagraph">{data?.data.body}</Typography>
      </Box>
    </ThemeProvider>
  );
}
