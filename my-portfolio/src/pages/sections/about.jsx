import { styled, Typography, Grid, Box, Container, IconButton } from "@mui/material"
import SchoolIcon from '@mui/icons-material/School';

const StyledAbout = styled("div")(( { theme } ) => ({
  backgroundColor: theme.palette.secondBackground.main, 
  height: "55vh",
  paddingTop: "50px"
}))

const StyledButton = styled("a")(({theme}) => ({
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
  backgroundColor: theme.palette.buttonHover.main,}
}))

const StyledIconButton = styled(IconButton)(({theme}) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "60px",
  height: "60px",
  borderRadius: "20px",
  padding: "0",
  backgroundColor:  theme.palette.button.main,
  color: theme.palette.textBackgroundContrast.main,
  cursor: "auto",
  border: "none",

  transition: "background-color 0.3s ease",
  "&:hover": {
  backgroundColor: theme.palette.buttonHover.main,}
}))

function About( { t } ){
    return (
        <>
          <StyledAbout id="about">
              <Container>
                <Box height="20%" width="100%" display="flex" alignItems="center" justifyContent="center">
                  <Typography variant="h3" color="text.main" textAlign="center">{t("information.about")}</Typography>
                </Box>
                <Grid container spacing={2} marginTop="5px" 
                sx={{borderBottom: theme => `2px solid ${theme.palette.text.main}`}}>
                  <Grid size={{ xs:12, md:9 }}>
                    <Typography variant="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Molestiae perspiciatis debitis totam iusto quasi? Magnam, distinctio quo. 
                    Repudiandae similique assumenda obcaecati iusto aspernatur atque iure reprehenderit rerum. 
                    Velit, possimus odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Molestiae perspiciatis debitis totam iusto quasi? Magnam, distinctio quo. 
                    Repudiandae similique assumenda obcaecati iusto aspernatur atque iure reprehenderit rerum. 
                    Velit, possimus odit</Typography>
                  </Grid>
                  <Grid size={{ xs:12, md:3 }} display="flex" justifyContent="center">
                    <StyledButton>
                    <Box display="flex" justifyContent="center" alignItems="center" gap="8px" 
                    sx={{ borderBottom: theme => `1px solid ${theme.palette.textBackgroundContrast.main}`, }}>
                        <SchoolIcon/>
                        <Typography variant="h6">{t("school")}</Typography>
                      </Box>
                      <Typography variant="p" textAlign="center" marginTop="5px">{t("computerScience")} <br />{t("bachelor")}</Typography>
                    </StyledButton>
                  </Grid>
                </Grid>
                <Box height="20%" width="100%" display="flex" flexDirection="column" marginTop="10px">
                  <Box display="flex" alignItems="center" justifyContent="center">
                    <Typography variant="h3" color="text.main" textAlign="center">{t("information.skills")}</Typography>
                  </Box>
                  <Box display="flex" gap="20px" marginTop="10px">
                    <StyledIconButton/>
                    <StyledIconButton/>
                    <StyledIconButton/>
                    <StyledIconButton/>
                    <StyledIconButton/>
                    <StyledIconButton/>
                    <StyledIconButton/>
                    <StyledIconButton/>
                    <StyledIconButton/>
                    <StyledIconButton/>
                  </Box>
                </Box>
              </Container>
          </StyledAbout>
        </>
      )
}

export default About