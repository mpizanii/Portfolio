import { styled } from "@mui/material"
import { Box, Typography, IconButton } from "@mui/material"
import LinkedinLogo from "../../assets/images/LinkedinLogo.png"
import GitHubLogo from "../../assets/images/GitHubLogo.png"

const StyledBackgroundFooter = styled("div")(({theme}) => ({
    backgroundColor: theme.palette.secondBackground.main, 
    height: "10vh",
    display: "flex",
    alignItems: "center",
}))

const StyledSocialMediaIcons = styled(IconButton)(({theme}) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "40px",
  height: "40px",
  borderRadius: "10px",
  backgroundColor: theme.palette.button.main,
  cursor: "pointer",
  border: "none",
}))


export default function Footer(){
    return (
        <>
          <StyledBackgroundFooter>
            <Box width="100%" display="flex" alignItems="center" px="2" py="2">
              <Box flex="1"></Box>
              <Box flex="1" textAlign="center" marginLeft={3}>
                <Typography variant="body1">
                  © Matheus Pizani - {new Date().getFullYear()}. <br />
                  Todos os direitos reservados.
                </Typography>
              </Box>
              <Box display="flex" gap="10px" justifyContent="flex-end" flex="1" marginRight="20px">
                <a href=""><StyledSocialMediaIcons><img src={LinkedinLogo} width="30px"/></StyledSocialMediaIcons></a>
                <a href=""><StyledSocialMediaIcons><img src={GitHubLogo} width="40px"/></StyledSocialMediaIcons></a>
              </Box>
            </Box>
          </StyledBackgroundFooter>
        </>
      )
}
