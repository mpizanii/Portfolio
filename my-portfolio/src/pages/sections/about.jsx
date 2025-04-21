import { styled, Typography, Grid, Box, Container, IconButton, useTheme } from "@mui/material"
import SchoolIcon from '@mui/icons-material/School';
import pythonLogo from "../../assets/images/pythonLogo.png"
import djangoLogo from "../../assets/images/djangoLogo.png"
import flaskLogo from "../../assets/images/flaskLogo.png"
import cssLogo from "../../assets/images/cssLogo.png"
import gitHubLogo from "../../assets/images/gitHubLogo.png"
import gitLogo from "../../assets/images/gitLogo.png"
import htmlLogo from "../../assets/images/htmlLogo.png"
import javaScriptLogo from "../../assets/images/javaScriptLogo.png"
import muiLogo from "../../assets/images/muiLogo.png"
import mySqlLogo from "../../assets/images/mySqlLogo.png"
import postgreLogo from "../../assets/images/postgreLogo.png"
import reactLogo from "../../assets/images/reactLogo.png"
import { useLayoutEffect  } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const StyledBackgroundAbout = styled("div")(( { theme } ) => ({
  [theme.breakpoints.up("xs")]: {
    backgroundColor: theme.palette.secondBackground.main, 
    minHeight: "100dvh",
    maxWidth: "100vw",
    paddingTop: "20px",
    overflow: "hidden"
  },
  [theme.breakpoints.up("md")]: {
    minHeight: "50vh"
  }
}))

const StyledEducationDiv = styled("a")(({theme}) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  width: "80%",
  height: "90%",
  marginBottom:"20px",
  borderRadius: "40px",
  padding: "0",
  backgroundColor:  theme.palette.button.main,
  color: theme.palette.textBackgroundContrast.main,
  cursor: "auto",
  border: "none",

  transition: "background-color 0.3s ease",
  "&:hover": {
  backgroundColor: theme.palette.buttonHover.main,},

  transform: "translateX(400px)",
  opacity: 0
}))

const StyledSkillsIcons = styled(IconButton)(({theme}) => ({
  [theme.breakpoints.up("xs")]: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "40px",
    height: "60px",
    borderRadius: "20px",
    padding: "0",
    backgroundColor: theme.palette.button.main,
    color: theme.palette.textBackgroundContrast.main,
    cursor: "auto",
    border: "none",
  
    transition: "background-color 0.3s ease",
    "&:hover": {
    backgroundColor: theme.palette.buttonHover.main,}
  },
  [theme.breakpoints.up("md")]: {
    width: "60px"
  }
}))

const StyledAboutMeBox = styled(Box)(({theme}) => ({
  opacity:"0"
}))

export default function About( { t  } ){
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const isMobile = window.innerWidth < 768;

    gsap.to(".educationButton", {
      x: 0,
      opacity: 1,
      rotate: "0deg",
      scrollTrigger: {
        trigger: ".gsapAbout  ",
        start: isMobile ? "top 120%" : "top 600px",
        end: isMobile ? "bottom 140%" : "bottom 500px",
        scrub: true,
      }
    });
    gsap.to(".aboutTypography", {
      opacity: 1,
      rotate: "0deg",
      scrollTrigger: {
        trigger: ".gsapAbout  ",
        start: isMobile ? "top 120%" : "top 600px",
        end: isMobile ? "bottom 140%" : "bottom 500px",
        scrub: true,
      }
    });

    return () => {
      gsap.killTweensOf(".educationButton", ".aboutTypography")
    }
  }, [])

    return (
        <>
          <StyledBackgroundAbout id="about" >
              <Container maxWidth="lg">
                <Box height="20%" width="100%" display="flex" alignItems="center" justifyContent="center">
                  <Typography variant="h3" color="text.main" textAlign="center">{t("information.about")}</Typography>
                </Box>
                <Box className="gsapAbout">
                  <Grid container spacing={2} marginTop="5px" 
                  sx={{borderBottom: theme => `2px solid ${theme.palette.text.main}`}}>
                  <Grid size={{ xs:12, md:9 }}>
                    <StyledAboutMeBox className="aboutTypography">
                      <Typography variant="p">{t("aboutme")}</Typography>
                    </StyledAboutMeBox>
                  </Grid>
                  <Grid size={{ xs:12, md:3 }} display="flex" justifyContent="center">
                    <StyledEducationDiv className="educationButton">
                    <Box display="flex" justifyContent="center" alignItems="center" gap="8px" 
                    sx={{ borderBottom: theme => `1px solid ${theme.palette.textBackgroundContrast.main}`, }}>
                        <SchoolIcon/>
                        <Typography variant="h6">{t("school")}</Typography>
                    </Box>
                      <Typography variant="p" textAlign="center" marginTop="5px">{t("computerScience")} <br />{t("bachelor")}</Typography>
                    </StyledEducationDiv>
                  </Grid>
                </Grid>
                </Box>
                <Box height="20%" width="100%" display="flex" flexDirection="column" marginTop="10px">
                  <Box display="flex" alignItems="center" justifyContent="center">
                    <Typography variant="h3" color="text.main" textAlign="center">{t("information.skills")}</Typography>
                  </Box>
                  <Box display="flex" gap="20px" marginTop="10px" justifyContent="center" alignItems="center" flexWrap="wrap">
                  {[
                    pythonLogo,
                    djangoLogo,
                    flaskLogo,
                    javaScriptLogo,
                    reactLogo,
                    htmlLogo,
                    cssLogo,
                    muiLogo,
                    mySqlLogo,
                    postgreLogo,
                    gitHubLogo,
                    gitLogo
                  ].map((logo, i) => (
                    <StyledSkillsIcons
                      key={i}
                      sx={{
                        flex: { xs: "0 1 22%", md: "0 1 auto" },
                        display: "flex",
                        justifyContent: "center"
                      }}
                    >
                      <img src={logo} width="40px" />
                    </StyledSkillsIcons>
                  ))}
                  </Box>
                </Box>
              </Container>
          </StyledBackgroundAbout>
        </>
      )
}