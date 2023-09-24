import { Outlet } from "react-router-dom";
import { Grid, Box, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <Grid container spacing={2} sx={{ margin: "10px 0px 40px 30px" }}>
        <Grid item xs={6}>
          <Box className="logo" sx={{ display: "flex", flexDirection: "row" }}>
            <Typography
              sx={{
                color: "black",
                fontSize: 23,
                fontFamily: "Proxima Nova",
                fontWeight: "700",
                wordWrap: "break-word",
              }}
            >
              A+
            </Typography>
            <Typography
              sx={{
                color: "black",
                fontSize: 23,
                fontFamily: "Roboto",
                fontWeight: "400",
                wordWrap: "break-word",
                marginLeft: "6px",
              }}
            >
              Studio
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} sx={{ position: "relative", right: "-40px" }}>
          <Grid
            container
            spacing={2}
            sx={{ position: "relative", top: "12px" }}
          >
            <Grid item xs={2.4}>
              <Link
                component={RouterLink}
                to="/"
                underline="none"
                color="black"
                variant="body1"
              >
                Home
              </Link>
            </Grid>
            <Grid item xs={2.4}>
              <Link
                component={RouterLink}
                to="/WhatWeDo"
                underline="none"
                color="black"
                variant="body1"
                sx={{ position: "relative", left: "-17px" }}
              >
                What We Do
              </Link>
            </Grid>
            <Grid item xs={2.4}>
              <Link
                component={RouterLink}
                to="/Service"
                underline="none"
                color="black"
                variant="body1"
              >
                Services
              </Link>
            </Grid>
            <Grid item xs={2.4}>
              <Link
                component={RouterLink}
                to="/Project"
                underline="none"
                color="black"
                variant="body1"
              >
                Project
              </Link>
            </Grid>
            <Grid item xs={2.4}>
              <Link
                component={RouterLink}
                to="/Contact"
                underline="none"
                color="black"
                variant="body1"
              >
                Contact
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Outlet />
    </>
  );
}
