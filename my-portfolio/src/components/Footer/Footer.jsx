import { styled } from "@mui/material"

function Footer(){
  const StyledFooter = styled("div")(({theme}) => ({
    backgroundColor: theme.palette.secondBackground.main, 
    height: "20vh",
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
          <StyledFooter>Footer</StyledFooter>
        </>
      )
}

export default Footer