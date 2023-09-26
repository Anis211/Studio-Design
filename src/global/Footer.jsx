import { Grid, Box, Typography, Divider } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { theme } from "../theme";

export default function Footer() {
  return (
    <ThemeProvider theme={theme}>
      <Divider
        sx={{
          width: "1200px",
          marginLeft: "120px",
          position: "relative",
          top: "60px",
        }}
      />
      <Box
        className="Footer"
        sx={{
          width: "1200px",
          height: "350px",
          margin: "70px 0px 25px 120px",
          paddingTop: "60px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Box
              className="First Column"
              sx={{
                width: "280px",
                height: "90px",
                display: "flex",
                flexDirection: "column",
                marginRight: "190px",
              }}
            >
              <Box
                className="logo"
                sx={{
                  width: "106px",
                  height: "30px",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
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
              <Typography variant="body2" sx={{ marginTop: "25px" }}>
                Leading digital agency with solid design and development
                expertise. We build readymade websites, mobile applications, and
                elaborate online business services.
              </Typography>
              <Box
                className="icons"
                sx={{
                  marginTop: "40px",
                  display: "flex",
                  flexDirection: "row",
                  gap: "16px",
                }}
              >
                <img src="src/images/facebook.jpg" />
                <img src="src/images/twitter.jpg" />
                <img src="src/images/linkedin.jpg" />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <Box
                  className="Second Column"
                  sx={{ width: "160px", height: "112px" }}
                >
                  <Typography variant="header2">What We Do</Typography>
                  <Box
                    className="links"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      marginTop: "25px",
                    }}
                  >
                    <Typography variant="body2">Web Design</Typography>
                    <Typography variant="body2">App Design</Typography>
                    <Typography variant="body2">Social Media Manage</Typography>
                    <Typography variant="body2">
                      Market Analysis Project
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box
                  className="Third Column"
                  sx={{ width: "120px", height: "85px", marginLeft: "60px" }}
                >
                  <Typography variant="header2">Company</Typography>
                  <Box
                    className="links"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      marginTop: "25px",
                    }}
                  >
                    <Typography variant="body2">About us</Typography>
                    <Typography variant="body2">Career</Typography>
                    <Typography variant="body2">Become Investor</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box
                  className="Fourth Column"
                  sx={{ width: "80px", height: "105px", marginLeft: "60px" }}
                >
                  <Typography variant="header2">Support</Typography>
                  <Box
                    className="links"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      marginTop: "25px",
                    }}
                  >
                    <Typography variant="body2">FAQ</Typography>
                    <Typography variant="body2">Policy</Typography>
                    <Typography variant="body2">Business</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box
                  className="Fifth Column"
                  sx={{ width: "75px", height: "105px", marginLeft: "40px" }}
                >
                  <Typography variant="header2">Contact</Typography>
                  <Box
                    className="links"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      marginTop: "25px",
                    }}
                  >
                    <Typography variant="body2">WhatsApp</Typography>
                    <Typography variant="body2">Support 24</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
