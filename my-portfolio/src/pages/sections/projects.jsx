import { Box, Container, Grid, styled, Typography, IconButton } from "@mui/material";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RecipeManager from "../../assets/images/RecipeManager.jpeg";
import cadastroUsuarios from "../../assets/images/cadastroUsuarios.png";
import DjangoLogo from "../../assets/images/djangoLogo.png";
import HtmlLogo from "../../assets/images/htmlLogo.png";
import CssLogo from "../../assets/images/cssLogo.png";
import JavaScriptLogo from "../../assets/images/javaScriptLogo.png";
import supabaseLogo from "../../assets/images/supabaseLogo.png";
import reactLogo from "../../assets/images/reactLogo.png";
import postgreLogo from "../../assets/images/postgreLogo.png";
import GitHubIcon from '@mui/icons-material/GitHub';
import VisibilityIcon from '@mui/icons-material/Visibility';

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

    return (
        <>
          <StyledBackgroundProjects id="projects">
            <Container maxWidth="lg">
              <Box height="20%" width="100%" display="flex" justifyContent="center">
                <Typography variant="h3" color="text.main" textAlign="center">{t("information.projects")}</Typography>
              </Box>
              <Box display="flex" justifyContent="center" flexDirection="column" gap="20px" marginTop="20px" ref={el}>
                <Grid container spacing={2} display="flex" justifyContent="center">
                  <Grid size={{ xs:12, md:6 }} display="flex" justifyContent="center" >
                    <StyledProjects id="layoutEffectProjects">
                      <Box backgroundColor="white" height="40%" width="100%" sx={{ borderTopLeftRadius:20, borderTopRightRadius:20 }}>
                      <StyledProjectImage src={RecipeManager}/>
                      </Box>
                      <Box display="flex" padding="10px" gap="8px" justifyContent="space-evenly" >
                        <StyledProjectsIcons><img src={DjangoLogo} width="50px"/></StyledProjectsIcons>
                        <StyledProjectsIcons><img src={CssLogo} width="50px"/></StyledProjectsIcons>
                        <StyledProjectsIcons><img src={HtmlLogo} width="40px"/></StyledProjectsIcons>
                        <StyledProjectsIcons><img src={JavaScriptLogo} width="50px"/></StyledProjectsIcons>
                      </Box>
                      <Box display="flex" justifyContent="center" flexDirection="column" textAlign="center">
                        <Typography variant="h6">Recipe Manager</Typography>
                        <Typography variant="body1" padding="10px" textAlign="center">{t("recipeManagerDescription")}</Typography>
                      </Box>
                      <Box display="flex" justifyContent="center" alignItems="center" margin="auto 0px 60px 0px" gap="50px">
                        <StyledProjectsButton href="https://web-production-813e0.up.railway.app/"><VisibilityIcon/>{t("seeDeployProjects")}</StyledProjectsButton>
                        <StyledProjectsButton href="https://github.com/mpizanii/Recipe-Manager"><GitHubIcon/>{t("seeGitHubProjects")}</StyledProjectsButton>
                      </Box>
                    </StyledProjects>
                  </Grid>

                  <Grid size={{ xs:12, md:6 }} display="flex" justifyContent="center" >
                    <StyledProjects id="layoutEffectProjects">
                      <Box backgroundColor="white" height="40%" width="100%" sx={{ borderTopLeftRadius:20, borderTopRightRadius:20 }}>
                      <StyledProjectImage src={cadastroUsuarios}/>
                      </Box>
                      <Box display="flex" padding="10px" gap="8px" justifyContent="space-evenly" >
                        <StyledProjectsIcons><img src={reactLogo} width="50px"/></StyledProjectsIcons>
                        <StyledProjectsIcons><img src={supabaseLogo} width="50px"/></StyledProjectsIcons>
                        <StyledProjectsIcons><img src={postgreLogo} width="50px"/></StyledProjectsIcons>
                      </Box>
                      <Box display="flex" justifyContent="center" flexDirection="column" textAlign="center">
                        <Typography variant="h6">{t("inventoryAndCustomerManagement")}</Typography>
                        <Typography variant="body1" padding="10px" textAlign="center">{t("inventoryAndCustomerManagementDescription")}</Typography>
                      </Box>
                      <Box display="flex" justifyContent="center" alignItems="center" margin="auto 0px 60px 0px" gap="50px">
                        <StyledProjectsButton><VisibilityIcon/>{t("inProgress")}</StyledProjectsButton>
                        <StyledProjectsButton href="https://github.com/mpizanii/CadastroUsuarios"><GitHubIcon/>{t("seeGitHubProjects")}</StyledProjectsButton>
                      </Box>
                    </StyledProjects>
                  </Grid>
                </Grid>
              </Box>
            </Container>
          </StyledBackgroundProjects>
        </>
      )
}
