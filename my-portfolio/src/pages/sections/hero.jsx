import {styled, Grid, Typography, Container} from "@mui/material";
import Me from "../../assets/images/Me.jpg";
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import { Typewriter } from '../../components/TypewriterEffect/TypewriterEffect';
import "../../i18n";
import { useTranslation } from "react-i18next";

const StyledHero = styled("div")(({theme}) => ({
  backgroundColor: theme.palette.background.default, 
  display: "flex",
  height: "100vh",
  alignItems: "center",
  [theme.breakpoints.up('xs')]: {
    paddingTop: "50px",
  },
  [theme.breakpoints.up('md')]: {
    paddingTop: "0px",
  }
}))

const StyledImg = styled("img")(({theme}) => ({
  width: "100%",
  borderRadius:"50%",
  border: `2px solid ${theme.palette.border.main}`
}))

const StyledButton = styled("a")(({theme}) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "150px",
  height: "40px",
  gap: "8px",
  marginTop: "15px",
  borderRadius: "10px",
  backgroundColor:  theme.palette.button.main,
  color: theme.palette.textBackgroundContrast.main,
  cursor: "pointer",
  border: "none",
  textDecoration: "none",

  transition: "background-color 0.3s ease",
  "&:hover": {
  backgroundColor: "#0410ad",}
}))
function Hero( { t } ) {
  const { i18n } = useTranslation();

  const lang = i18n.language;
  const pdfPath = lang === 'en' ? "pdf/CV - en.pdf" : "pdf/CV - pt.pdf"

  return (
    <>
      <StyledHero>
        <Container>

          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 4 }}>
                <StyledImg src={Me}/>
            </Grid>
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography variant="h1" color="text.main" textAlign={"center"}>Matheus Pizani</Typography>
              <Typography variant="h4" color="text.main" textAlign={"center"}><Typewriter text={t('career')}/></Typography>
              <Grid container display="flex" justifyContent="center" gap="10px">
                <Grid size={{ xs:4, md:3 }} display="flex" justifyContent="center">
                <StyledButton component="a" href={pdfPath} download>
                  <DownloadIcon />
                  {t('download')}
                </StyledButton>
                </Grid>
                <Grid size={{ xs:4, md:3 }} display="flex" justifyContent="center">
                  <StyledButton onClick={() => console.log("contato")}>
                    <EmailIcon/>
                    {t('contact')}
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