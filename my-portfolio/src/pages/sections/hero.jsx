import {styled, Grid, Typography, Container, backdropClasses} from "@mui/material";
import Me from "../../assets/images/Me.jpg";
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';


function Hero() {
  const StyledHero = styled("div")(({theme}) => ({
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
  const StyledImg = styled("img")(({theme}) => ({
    width: "100%",
    borderRadius:"50%",
    border: `2px solid ${theme.palette.text.main}`
  }))
  const StyledButton = styled("button")(({theme}) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "150px",
    height: "40px",
    gap: "8px",
    marginTop: "15px",
    borderRadius: "10px",
    backgroundColor:  theme.palette.secondary.main,
    color: "white",
    cursor: "pointer",
    border: "none",

    transition: "background-color 0.3s ease",
    "&:hover": {
    backgroundColor: "#0410ad",}
}))
  return (
    <>
      <StyledHero>
        <Container>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 4 }}>
                <StyledImg src={Me}/>
            </Grid>
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography variant="h1" color="secondary" textAlign={"center"}>Matheus Pizani</Typography>
              <Typography variant="h4" color="secondary" textAlign={"center"}>Desenvolvedor Full-Stack</Typography>
              <Grid container display="flex" justifyContent="center" gap="10px">
                <Grid size={{ xs:4, md:3 }} display="flex" justifyContent="center">
                  <StyledButton onClick={() => console.log("download")}>
                    <DownloadIcon/>
                    Baixar CV
                  </StyledButton>
                </Grid>
                <Grid size={{ xs:4, md:3 }} display="flex" justifyContent="center">
                  <StyledButton onClick={() => console.log("contato")}>
                    <EmailIcon/>
                    Contato
                  </StyledButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

        </Container>
      </StyledHero>
    </>
  )
}
  
export default Hero