import {
  Box,
  Grid,
  Fab,
  Typography,
  Link,
  Paper,
  Card,
  CardMedia,
  Pagination,
  Avatar,
  TextField,
  Snackbar,
  Slide,
  Alert,
} from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import * as React from "react";
import { theme } from "../../theme.js";
import Dots from "./HomeDetails/background/Dots.jsx";
import DotsLight from "./HomeDetails/background/DotsLight.jsx";
import OutlinedDots from "./HomeDetails/background/OutlinedDots.jsx";
import ShortDotsLight from "./HomeDetails/background/ShortDotsLight.jsx";
import { useClientsStore } from "../../Data/happyClientsData.js";
import { useEmailsStore } from "../../Data/emailData.js";

export default function Home() {
  const clientsArray = useClientsStore((state) => state.clients);
  const clientIndex = useClientsStore((state) => state.clientIndex);
  const maxClientsNumber = useClientsStore((state) => state.maxClientsNumber);
  const changeClientIndex = useClientsStore((state) => state.changeClientIndex);
  const emails = useEmailsStore((state) => state.emails);
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);
  let emailContent = "";

  function handleEmailChange(event) {
    emailContent = event.target.value;
  }

  function handleEmailClick() {
    if (emailContent.includes("@")) {
      emails.push(emailContent);
      setOpenSuccess(true);
    } else {
      setOpenError(true);
    }
  }

  function handleSnackbarClose() {
    setOpenSuccess(false);
    setOpenError(false);
  }

  function clientBox(index) {
    return (
      <Grid container spacing={2} columns={2}>
        <Grid item xs={4}>
          <Avatar
            sx={{
              width: "390px",
              height: "390px",
            }}
          >
            <img
              src={clientsArray[index].avatar}
              style={{ width: "390px", height: "390px" }}
            />
          </Avatar>
        </Grid>
        <Grid item xs={8}>
          <Box
            className="text"
            sx={{
              display: "flex",
              flexDirection: "column",
              position: "relative",
              left: "407px",
              bottom: "315px",
              marginLeft: "65px",
            }}
          >
            <Typography
              variant="header1"
              sx={{ width: "173px", height: "30px", marginBottom: "18px" }}
            >
              {clientsArray[index].name}
            </Typography>
            <Typography
              variant="bodyParagraph"
              sx={{ width: "412px", height: "78px" }}
            >
              {clientsArray[index].comment}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    );
  }

  return (
    <>
      <Box
        className="Home Page"
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <ThemeProvider theme={theme}>
          <Box
            className="HeroHeadline"
            sx={{ maxHeight: "670px", maxWidth: "1372px" }}
          >
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Box
                  sx={{
                    margin: "90px 0px 0px 40px",
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: "464px",
                  }}
                >
                  <Typography variant="header" sx={{ paddingBottom: "40px" }}>
                    A Digital Product Agency
                  </Typography>
                  <Typography variant="bodyParagraph">
                    Leading digital agency with solid design and development
                    expertise. We build readymade websites, mobile applications,
                    and elaborate online business services.
                  </Typography>
                  <Fab
                    color="primary"
                    variant="extended"
                    sx={{ maxWidth: "225px", marginTop: "30px" }}
                  >
                    <Link
                      component={RouterLink}
                      to="/Contact"
                      underline="none"
                      color="white"
                    >
                      Contact Now
                    </Link>
                  </Fab>
                  <Dots />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <img
                  style={{
                    width: "754px",
                    height: "512px",
                    borderBottomLeftRadius: 200,
                  }}
                  src="src/images/image 8.jpg"
                />
              </Grid>
            </Grid>
            <img
              src="src/images/Ellipse 85.jpg"
              style={{
                width: "130px",
                height: "130px",
                position: "relative",
                top: "-500px",
                left: "637px",
                zIndex: -1,
              }}
            />
            <div
              style={{
                width: "180px",
                height: "180px",
                background: "#FFF5DB",
                borderBottomRightRadius: 100,
                position: "relative",
                top: "-220px",
                left: "1150px",
                zIndex: -1,
              }}
            />
          </Box>
          <Box
            className="Our Client"
            sx={{ marginLeft: "55px", width: "1300px" }}
          >
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: "336px",
                    maxHeight: "58px",
                  }}
                >
                  <Typography variant="header" sx={{ marginBottom: "17px" }}>
                    Our Client
                  </Typography>
                  <Typography variant="bodyParagraph">
                    Several selected clients, who already believe in our
                    service.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={9}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    position: "relative",
                    bottom: "-50px",
                    left: "90px",
                  }}
                >
                  <img
                    src="src/images/google-logo.png"
                    style={{
                      width: "150px",
                      height: "50px",
                      paddingRight: "60px",
                    }}
                  />
                  <img
                    src="src/images/airbnb-logo.png"
                    style={{
                      width: "167px",
                      height: "150px",
                      position: "relative",
                      top: "-54px",
                      paddingRight: "60px",
                    }}
                  />
                  <img
                    src="src/images/uber_eats-logo-brandlogos.net.png"
                    style={{
                      width: "155px",
                      height: "150px",
                      position: "relative",
                      top: "-52px",
                      paddingRight: "60px",
                    }}
                  />
                  <img
                    src="src/images/amazon-logo.png"
                    style={{
                      width: "150px",
                      height: "38px",
                      position: "relative",
                      bottom: "-10px",
                      paddingRight: "60px",
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box
            className="How Can We Help"
            sx={{
              maxWidth: "1260px",
              maxHeight: "870px",
              marginTop: "100px",
              marginLeft: "50px",
            }}
          >
            <Grid container>
              <Grid item xs={5}>
                <Box
                  className="text"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "300px",
                  }}
                >
                  <Typography
                    variant="header"
                    sx={{
                      maxWidth: "360px",
                      maxHeight: "100px",
                      marginBottom: "30px",
                    }}
                  >
                    How can we help your Business ?
                  </Typography>
                  <Typography
                    variant="bodyParagraph"
                    sx={{ maxWidth: "400px", maxHeight: "55px" }}
                  >
                    We build readymade websites, mobile applications, and
                    elaborate online business services.
                  </Typography>
                  <div
                    style={{
                      width: "178px",
                      height: "178px",
                      background: "#FFF5DB",
                      borderTopLeftRadius: 100,
                      position: "relative",
                      top: "-240px",
                      left: "-40px",
                      zIndex: -1,
                    }}
                  />
                  <DotsLight />
                  <div
                    style={{
                      width: "1050px",
                      height: "620px",
                      background: "#F4F9FF",
                      borderTopLeftRadius: 150,
                      position: "relative",
                      top: "-730px",
                      left: "270px",
                      zIndex: -2,
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={7}>
                <Box
                  className="boxes1"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Paper
                    sx={{
                      width: "310px",
                      height: "380px",
                      boxShadow: "0px 10px 50px rgba(0, 0, 0, 0.05)",
                      borderRadius: "40px",
                      border: "0.50px #F2F2F2 solid",
                      marginBottom: "40px",
                    }}
                  >
                    <div
                      style={{
                        width: "121px",
                        height: "121px",
                        background: "#F1F7FF",
                        borderRadius: 20,
                        position: "relative",
                        top: "40px",
                        left: "94px",
                      }}
                    >
                      <img
                        src="src/images/box.png"
                        style={{
                          width: "74px",
                          height: "74px",
                          position: "relative",
                          left: "24px",
                          top: "24px",
                        }}
                      />
                    </div>
                    <Box
                      sx={{
                        maxWidth: "167px",
                        height: "60px",
                        marginTop: "62px",
                        textAlign: "center",
                      }}
                    >
                      <Typography
                        variant="header1"
                        sx={{
                          position: "relative",
                          left: "70px",
                        }}
                      >
                        Business Idea Planning
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: "245px",
                        height: "45px",
                        textAlign: "center",
                        marginLeft: "34px",
                        marginTop: "25px",
                      }}
                    >
                      <Typography variant="bodyParagraph">
                        We present you a proposal and discuss niffty-gritty like
                      </Typography>
                    </Box>
                  </Paper>
                  <Paper
                    sx={{
                      width: "310px",
                      height: "380px",
                      boxShadow: "0px 10px 50px rgba(0, 0, 0, 0.05)",
                      borderRadius: "40px",
                      border: "0.50px #F2F2F2 solid",
                    }}
                  >
                    <div
                      style={{
                        width: "121px",
                        height: "121px",
                        background: "#FFF2F8",
                        borderRadius: 20,
                        position: "relative",
                        top: "40px",
                        left: "94px",
                      }}
                    >
                      <img
                        src="src/images/icons8-code-91.png"
                        style={{
                          width: "74px",
                          height: "74px",
                          position: "relative",
                          left: "24px",
                          top: "24px",
                        }}
                      />
                    </div>
                    <Box
                      sx={{
                        maxWidth: "240px",
                        height: "60px",
                        marginTop: "62px",
                        textAlign: "center",
                        marginLeft: "35px",
                      }}
                    >
                      <Typography variant="header1">
                        Development Website and App
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: "245px",
                        height: "45px",
                        textAlign: "center",
                        marginLeft: "34px",
                        marginTop: "25px",
                      }}
                    >
                      <Typography variant="bodyParagraph">
                        Communication protocols apart from engagement models
                      </Typography>
                    </Box>
                  </Paper>
                </Box>
                <Box
                  className="boxes2"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "344px",
                    marginTop: "-881px",
                  }}
                >
                  <Paper
                    sx={{
                      width: "310px",
                      height: "380px",
                      boxShadow: "0px 10px 50px rgba(0, 0, 0, 0.05)",
                      borderRadius: "40px",
                      border: "0.50px #F2F2F2 solid",
                      marginBottom: "40px",
                    }}
                  >
                    <div
                      style={{
                        width: "121px",
                        height: "121px",
                        background: "#FFF7E3",
                        borderRadius: 20,
                        position: "relative",
                        top: "40px",
                        left: "98px",
                      }}
                    >
                      <img
                        src="src/images/icons8-wallet-100.png"
                        style={{
                          width: "74px",
                          height: "74px",
                          position: "relative",
                          left: "24px",
                          top: "24px",
                        }}
                      />
                    </div>
                    <Box
                      sx={{
                        maxWidth: "200px",
                        height: "60px",
                        marginTop: "62px",
                        textAlign: "center",
                      }}
                    >
                      <Typography
                        variant="header1"
                        sx={{
                          position: "relative",
                          left: "58px",
                        }}
                      >
                        Finance Planning System
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: "245px",
                        height: "45px",
                        textAlign: "center",
                        marginLeft: "34px",
                        marginTop: "25px",
                      }}
                    >
                      <Typography variant="bodyParagraph">
                        Protocols apart from aengage models, pricing billing
                      </Typography>
                    </Box>
                  </Paper>
                  <Paper
                    sx={{
                      width: "310px",
                      height: "380px",
                      boxShadow: "0px 10px 50px rgba(0, 0, 0, 0.05)",
                      borderRadius: "40px",
                      border: "0.50px #F2F2F2 solid",
                    }}
                  >
                    <div
                      style={{
                        width: "121px",
                        height: "121px",
                        background: "#DEFFEE",
                        borderRadius: 20,
                        position: "relative",
                        top: "40px",
                        left: "94px",
                      }}
                    >
                      <img
                        src="src/images/icons8-chart-64.png"
                        style={{
                          width: "74px",
                          height: "74px",
                          position: "relative",
                          left: "24px",
                          top: "24px",
                        }}
                      />
                    </div>
                    <Box
                      sx={{
                        maxWidth: "240px",
                        height: "60px",
                        marginTop: "62px",
                        textAlign: "center",
                        marginLeft: "35px",
                      }}
                    >
                      <Typography variant="header1">
                        Market Analysis Project
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: "245px",
                        height: "45px",
                        textAlign: "center",
                        marginLeft: "34px",
                        marginTop: "25px",
                      }}
                    >
                      <Typography variant="bodyParagraph">
                        Protocols apart from aengage models, pricing billing
                      </Typography>
                    </Box>
                  </Paper>
                  <div
                    style={{
                      width: "120px",
                      height: "120px",
                      borderRadius: 9999,
                      border: "4.40px #FF007A solid",
                      position: "relative",
                      bottom: "85px",
                      left: "230px",
                      zIndex: -3,
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </ThemeProvider>
        <Box
          className="Greate Since"
          sx={{ maxWidth: "1400px", maxHeight: "440px" }}
        >
          <Grid container spacing={2}>
            <Grid item xs={5}>
              <Card
                elevation={0}
                sx={{
                  width: "550px",
                  height: "380px",
                  borderRadius: "32px",
                  boxShadow: "10px 20px 50px rgba(0, 0, 0, 0.15)",
                  position: "relative",
                  left: "50px",
                }}
              >
                <CardMedia
                  component="video"
                  src="src/images/video_preview_h264.mp4"
                  autoPlay
                  loop
                  muted
                  sx={{ width: "100%", height: "100%" }}
                />
              </Card>
              <div
                style={{
                  width: "130px",
                  height: "130px",
                  background: "#FFF5DB",
                  borderRadius: 9999,
                  position: "relative",
                  left: "520px",
                  bottom: "66px",
                  zIndex: -1,
                }}
              />
            </Grid>
            <Grid item xs={7}>
              <ThemeProvider theme={theme}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "200px",
                    marginTop: "82px",
                  }}
                >
                  <Typography
                    variant="header"
                    sx={{ width: "470px", height: "100px" }}
                  >
                    Great Digital Product Agency since 2016
                  </Typography>
                  <Typography
                    variant="bodyParagraph"
                    sx={{ width: "535px", height: "105px", marginTop: "30px" }}
                  >
                    Our Business Plan is a written document describing a
                    companys core business activites, Objectives, and how it
                    plans to achieve its goals. Our goal is to provide our
                    client high quality Product with modern idea accordingly
                    their budgets and according thir reuirements.
                  </Typography>
                </Box>
                <div
                  style={{
                    width: "180px",
                    height: "180px",
                    background: "#EFF1FF",
                    borderBottomRightRadius: 100,
                    position: "relative",
                    left: "150px",
                    bottom: "250px",
                    zIndex: -1,
                  }}
                />
              </ThemeProvider>
            </Grid>
          </Grid>
        </Box>
        <Box className="HappyClients" sx={{ width: "1265px", height: "597px" }}>
          <ThemeProvider theme={theme}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Box
                  sx={{
                    marginLeft: "40px",
                    marginTop: "115px",
                  }}
                >
                  <Box
                    className="text"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "center",
                      marginLeft: "400px",
                    }}
                  >
                    <Typography
                      variant="header"
                      sx={{
                        width: "490px",
                        height: "50px",
                        marginBottom: "15px",
                      }}
                    >
                      What our happy client say
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        width: "590px",
                        height: "30px",
                        position: "relative",
                        left: "-48px",
                      }}
                    >
                      Several selected clients, who already believe in our
                      service.
                    </Typography>
                  </Box>
                  <Box className="ClientsComments" sx={{ paddingTop: "120px" }}>
                    {clientBox(clientIndex)}
                    <Pagination
                      page={clientIndex + 1}
                      count={4}
                      id="pagination"
                      variant="text"
                      hideNextButton
                      hidePrevButton
                      sx={{
                        position: "relative",
                        bottom: "280px",
                        left: "400px",
                        marginLeft: "65px",
                      }}
                      onClick={(event) => {
                        if (
                          Number(event.target.textContent <= maxClientsNumber)
                        ) {
                          changeClientIndex(
                            Number(event.target.textContent) - 1
                          );
                        }
                      }}
                    />
                    <OutlinedDots />
                    <div
                      style={{
                        width: "120px",
                        height: "120px",
                        borderRadius: 9999,
                        border: "4.40px #FF007A solid",
                        position: "relative",
                        bottom: "465px",
                        zIndex: -1,
                      }}
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Avatar
                  sx={{
                    width: "120px",
                    height: "120px",
                    position: "relative",
                    top: "425px",
                    left: "262px",
                  }}
                >
                  <img
                    src="src/images/unsplash_1.jpg"
                    style={{ width: "120px", height: "120px" }}
                  />
                </Avatar>
                <Avatar
                  sx={{
                    width: "98px",
                    height: "98px",
                    position: "relative",
                    top: "265px",
                    left: "140px",
                  }}
                >
                  <img
                    src="src/images/unsplash_2.jpg"
                    style={{ width: "98px", height: "98px" }}
                  />
                </Avatar>
                <Avatar
                  sx={{
                    width: "68px",
                    height: "68px",
                    position: "relative",
                    top: "312px",
                    left: "140px",
                  }}
                >
                  <img
                    src="src/images/unsplash_3.jpg"
                    style={{ width: "68px", height: "68px" }}
                  />
                </Avatar>
                <Avatar
                  sx={{
                    width: "98px",
                    height: "98px",
                    position: "relative",
                    top: "292px",
                    left: "238px",
                  }}
                >
                  <img
                    src="src/images/unsplash_4.jpg"
                    style={{ width: "98px", height: "98px" }}
                  />
                </Avatar>
                <Avatar
                  sx={{
                    width: "68px",
                    height: "68px",
                    position: "relative",
                    top: "160px",
                    left: "366px",
                  }}
                >
                  <img
                    src="src/images/unsplash_5.jpg"
                    style={{ width: "68px", height: "68px" }}
                  />
                </Avatar>
                <Avatar
                  sx={{
                    width: "54px",
                    height: "54px",
                    position: "relative",
                    top: "38px",
                    left: "434px",
                  }}
                >
                  <img
                    src="src/images/unsplash_6.jpg"
                    style={{ width: "54px", height: "54px" }}
                  />
                </Avatar>
                <Avatar
                  sx={{
                    width: "54px",
                    height: "54px",
                    position: "relative",
                    top: "-103px",
                    left: "395px",
                  }}
                >
                  <img
                    src="src/images/unsplash_7.jpg"
                    style={{ width: "54px", height: "54px" }}
                  />
                </Avatar>
                <Avatar
                  sx={{
                    width: "68px",
                    height: "68px",
                    position: "relative",
                    top: "-225px",
                    left: "283px",
                  }}
                >
                  <img
                    src="src/images/unsplash_8.jpg"
                    style={{ width: "68px", height: "68px" }}
                  />
                </Avatar>
                <div
                  style={{
                    width: "184px",
                    height: "184px",
                    background: "#FFF5DB",
                    borderRadius: 9999,
                    position: "relative",
                    top: "-184px",
                    left: "164px",
                    zIndex: -1,
                  }}
                />
              </Grid>
            </Grid>
          </ThemeProvider>
        </Box>
        <Box
          className="Newsletter"
          sx={{
            width: "1275px",
            height: "390px",
            marginTop: "275px",
            marginLeft: "90px",
          }}
        >
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                width: "1200px",
                height: "300px",
                background: "#F4F9FF",
                borderRadius: "75px",
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "center",
                      marginTop: "98px",
                    }}
                  >
                    <Typography variant="header" sx={{ marginBottom: "15px" }}>
                      Subscribe Newsletter
                    </Typography>
                    <Typography variant="body1" sx={{ marginLeft: "60px" }}>
                      I will update good news and promotion service not spam
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <div
                    style={{
                      width: "520px",
                      height: "300px",
                      background: "#2639ED",
                      marginTop: "-16px",
                      marginLeft: "70px",
                      borderTopRightRadius: "75px",
                      borderBottomRightRadius: "75px",
                      borderTopLeftRadius: "125px",
                      borderBottomLeftRadius: "165px",
                    }}
                  />
                  <TextField
                    type="email"
                    placeholder="Enter your email address.."
                    onChange={handleEmailChange}
                    sx={{
                      width: "450px",
                      backgroundColor: "white",
                      borderRadius: "5px",
                      position: "relative",
                      bottom: "176px",
                    }}
                  />
                  <Fab
                    variant="extended"
                    name="email"
                    sx={{
                      backgroundColor: "#2639ED",
                      position: "relative",
                      bottom: "230px",
                      left: "290px",
                      zIndex: 2,
                      ":hover": {
                        backgroundColor: "#4b5292",
                      },
                    }}
                    onClick={handleEmailClick}
                  >
                    <Typography variant="button">Contact Now</Typography>
                  </Fab>
                </Grid>
              </Grid>
            </Box>
          </ThemeProvider>
          <div
            style={{
              width: "178px",
              height: "178px",
              transformOrigin: "0 0",
              background: "#FFF5DB",
              borderBottomLeftRadius: 100,
              position: "relative",
              left: "-38px",
              bottom: "140px",
              zIndex: -1,
            }}
          />
          <ShortDotsLight />
          <Snackbar
            open={openSuccess || openError}
            autoHideDuration={3000}
            onClose={handleSnackbarClose}
          >
            <Slide direction="up" in={openSuccess || openError}>
              <Alert severity={openSuccess ? "success" : "warning"}>
                {openSuccess
                  ? `Email has been sent!`
                  : "You did something wrong!"}
              </Alert>
            </Slide>
          </Snackbar>
          {console.log(emails)}
        </Box>
      </Box>
    </>
  );
}
