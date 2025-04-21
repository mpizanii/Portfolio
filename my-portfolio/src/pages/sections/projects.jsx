import { Box, Container, styled, Typography } from "@mui/material"

const StyledProjects = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default, 
  height: "100vh",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.up('xs')]: {
    paddingTop: "100px"
  },
  [theme.breakpoints.up('md')]: {
    paddingTop: "0px"
  }
}))

function Projects( { t } ){
    return (
        <>
          <StyledProjects id="projects">
            <Container maxWidth="lg">
              <Box height="20%" width="100%" display="flex" alignItems="center" justifyContent="center">
                <Typography variant="h3" color="text.main" textAlign="center">{t("information.projects")}</Typography>
              </Box>
            </Container>
          </StyledProjects>
        </>
      )
}

export default Projects