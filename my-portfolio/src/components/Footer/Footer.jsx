import { styled } from "@mui/material"
import { Box, Typography, IconButton } from "@mui/material"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const StyledBackgroundFooter = styled("div")(({theme}) => ({
    backgroundColor: theme.palette.secondBackground.main, 
    height: "12vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
}))

export default function Footer( { t } ){
    return (
        <>
          <StyledBackgroundFooter>
            <Box width="100%" display="flex" alignItems="center" gap="100px" justifyContent="center" color="black">
                <IconButton href="https://www.linkedin.com/in/pizanimatheus/">
                  <LinkedInIcon/>
                </IconButton>
                <IconButton href="https://github.com/mpizanii">
                  <GitHubIcon/>
                </IconButton>
                <IconButton href="mailto:mpizani28@gmail.com?">
                  <EmailIcon/>
                </IconButton>
            </Box>
            <Box width="100%" display="flex" alignItems="center" justifyContent="center" textAlign="center" marginTop="5px">
              <Typography variant="body1">
                © {new Date().getFullYear()} Matheus Pizani - {t("footerDescription")}
              </Typography>
            </Box>
          </StyledBackgroundFooter>
        </>
      )
}
