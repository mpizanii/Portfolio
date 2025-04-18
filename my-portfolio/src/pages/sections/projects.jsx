import { styled } from "@mui/material"

function Projects(){
  const StyledProjects = styled("div")(({theme}) => ({
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
    return (
        <>
          <StyledProjects id="projects">Projects</StyledProjects>
        </>
      )
}

export default Projects