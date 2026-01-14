import { Box, Container, Grid, styled, Typography, IconButton } from "@mui/material";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RecipeManager from "../../assets/images/RecipeManager.jpeg";
import estoqueKLG from "../../assets/images/estoqueKLG.png";
import encurtadorURL from "../../assets/images/encurtadorURL.png";
import geovana21Anos from "../../assets/images/geovana21Anos.png";
import DjangoLogo from "../../assets/images/djangoLogo.png";
import HtmlLogo from "../../assets/images/htmlLogo.png";
import CssLogo from "../../assets/images/cssLogo.png";
import JavaScriptLogo from "../../assets/images/javaScriptLogo.png";
import reactLogo from "../../assets/images/reactLogo.png";
import postgreLogo from "../../assets/images/postgreLogo.png";
import mongoDBLogo from "../../assets/images/mongoDBLogo.png";
import GitHubIcon from '@mui/icons-material/GitHub';
import VisibilityIcon from '@mui/icons-material/Visibility';
import cLogo from "../../assets/images/cLogo.png"
import netLogo from "../../assets/images/netLogo.png"

const StyledBackgroundProjects = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    backgroundColor: theme.palette.background.default, 
    minHeight: "100dvh",
    maxWidth: "100vw",  
    paddingTop: "20px"
  }
}))

const StyledProjects = styled(Box)(({theme}) => ({
  display: "flex",
  justifyContent: "flex-start",
  flexDirection:"column",
  width: "500px",
  height: "600px",
  borderRadius: "40px",
  backgroundColor:  theme.palette.button.main,
  color: theme.palette.textBackgroundContrast.main,
  cursor: "auto",
  border: "none",

  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.02)",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)"
  },

}))

const StyledProjectsIcons = styled(IconButton)(({theme}) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "60px",
  height: "60px",
  borderRadius: "20px",
  padding: "0",
  backgroundColor: "white",
  color: theme.palette.textBackgroundContrast.main,
  cursor: "auto",
  border: "none",

  transition: "background-color 0.3s ease",
  "&:hover": {
  backgroundColor: theme.palette.buttonHover.main,}
}))

const StyledProjectsButton = styled("a")(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center", 
    width: "100px",
    height: "40px",
    gap: "5px",
    borderRadius: "10px",
    textAlign:"center",
    backgroundColor:  "white",
    color: theme.palette.text.main,
    cursor: "pointer",
    border: "none",
    textDecoration: "none",

    transition: "background-color 0.3s ease",
    "&:hover": {
    backgroundColor: theme.palette.buttonHover.main,}
  },
  [theme.breakpoints.up("md")]:{
    width: "150px"
}

}))

const StyledProjectImage = styled("img")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundColor: theme.palette.button.main,
    color: theme.palette.textBackgroundContrast.main,
    cursor: "auto",
    border: "none",
    textDecoration: "none",

}))

export default function Projects( { t } ){
  const el = useRef();
  const tl = useRef();

  useLayoutEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
      const ctx = gsap.context(() => {
        tl.current = gsap.timeline({
          scrollTrigger:{
            trigger: el.current,
            scrub: true,
            start: "top 800px",
            end: "bottom 700px"
          }
        }).fromTo("#layoutEffectProjects",  {
          opacity: 0,
          y: 60,
        }, {
          opacity: 1,
          y: 0
        })
      }, el)

      return () => ctx.revert();
  }, [])

  const projects = [
    {
      title: "Recipe Manager",
      description: t("recipeManagerDescription"),
      image: RecipeManager,
      technologies: [DjangoLogo, CssLogo, HtmlLogo, JavaScriptLogo],
      deployLink: "https://web-production-813e0.up.railway.app/",
      githubLink: "https://github.com/mpizanii/Recipe-Manager"
    },
    {
      title: t("inventoryAndCustomerManagement"),
      description: t("inventoryAndCustomerManagementDescription"),
      image: estoqueKLG,
      technologies: [reactLogo, cLogo, netLogo, postgreLogo],
      deployLink: null,
      githubLink: "https://github.com/mpizanii/CadastroUsuarios"
    },
    {
      title: t("URLShortener"),
      description: t("URLShortenerDescription"),
      image: encurtadorURL,
      technologies: [cLogo, netLogo, mongoDBLogo, reactLogo],
      deployLink: null,
      githubLink: "https://github.com/mpizanii/EncurtadorUrl"
    },
    {
      title: t("GuestManager"),
      description: t("guestManagerDescription"),
      image: geovana21Anos,
      technologies: [reactLogo, postgreLogo],
      deployLink: "https://geovana-21-anos.vercel.app/",
      githubLink: "https://github.com/mpizanii/Geovana-21-anos"
    },
    // {
    //   title: "FinTracker",
    //   description: t("finTrackerDescription"),
    //   image: null,
    //   technologies: [],
    //   deployLink: null,
    //   githubLink: null
    // },
  ]

  return (
    <>
      <StyledBackgroundProjects id="projects">
        <Container maxWidth="lg">
          <Box height="20%" width="100%" display="flex" justifyContent="center">
            <Typography variant="h3" color="text.main" textAlign="center">{t("information.projects")}</Typography>
          </Box>
          <Box display="flex" justifyContent="center" flexDirection="column" gap="20px" marginTop="20px" ref={el}>
            <Grid container spacing={2} display="flex" justifyContent="center">
              {projects.map((project, index) => (
                <Grid size={{ xs:12, md:4 }} display="flex" justifyContent="center" key={index} >
                  <StyledProjects id="layoutEffectProjects">
                    <Box backgroundColor="white" height="40%" width="100%" sx={{ borderTopLeftRadius:20, borderTopRightRadius:20 }}>
                    <StyledProjectImage src={project.image}/>
                    </Box>
                    <Box display="flex" padding="10px" gap="8px" justifyContent="space-evenly" >
                      {project.technologies.map((tech, techIndex) => (
                        <StyledProjectsIcons key={techIndex}><img src={tech} width="40px"/></StyledProjectsIcons>
                      ))}
                    </Box>
                    <Box display="flex" justifyContent="center" flexDirection="column" textAlign="center">
                      <Typography variant="h6">{project.title}</Typography>
                      <Typography variant="body1" padding="10px" textAlign="center">{project.description}</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center" alignItems="center" margin="auto 0px 60px 0px" gap="50px">
                      <StyledProjectsButton href={project.deployLink}><VisibilityIcon/>{t("seeDeployProjects")}</StyledProjectsButton>
                      <StyledProjectsButton href={project.githubLink}><GitHubIcon/>{t("seeGitHubProjects")}</StyledProjectsButton>
                    </Box>
                  </StyledProjects>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </StyledBackgroundProjects>
    </>
  )
}
