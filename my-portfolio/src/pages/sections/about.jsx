import { styled } from "@mui/material"

function About(){
  const StyledAbout = styled("div")(({theme}) => ({
    backgroundColor: theme.palette.secondBackground.main, 
    height: "75vh",
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
          <StyledAbout id="about">About</StyledAbout>
        </>
      )
}

export default About