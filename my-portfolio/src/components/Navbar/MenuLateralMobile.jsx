import { Drawer, IconButton, Box, MenuItem, Typography } from "@mui/material";
import Brasil from "../../assets/images/Brasil.png";
import Usa from "../../assets/images/Usa.png";
import { styled } from "@mui/material/styles";

const StyledHandleMenu = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "10px",
  backgroundColor: theme.palette.background.default,
  height: "100%",
}));

export default function MenuLateral({ menuLateralAberto, setMenuLateralAberto, StyledImg, changeLanguage, t}) {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Drawer anchor="left" open={menuLateralAberto} onClose={() => setMenuLateralAberto(false)}>
        <StyledHandleMenu>
        <Typography variant= "h6" borderBottom="2px solid black" textAlign="center" width="100%">Matheus Pizani</Typography>
            <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" marginTop="5px">
                <MenuItem onClick={() => scrollToSection("about")}>{t("information.about")}</MenuItem>
                <MenuItem onClick={() => scrollToSection("about")}>{t("information.skills")}</MenuItem>
                <MenuItem onClick={() => scrollToSection("projects")}>{t("information.projects")}</MenuItem>
            </Box>       
        <Box display="flex" justifyContent="flex-start" flexDirection="column" height="100%" marginTop="10px" alignItems="center">
            <Typography variant= "h6" borderBottom="2px solid black" textAlign="center" width="100%">{t("language")}</Typography>
                <Box display="flex" justifyContent="space-evenly" marginTop="5px">
                <IconButton onClick={() => changeLanguage('pt')}>
                    <StyledImg src={Brasil} alt="Brasil" />
                </IconButton>
                <IconButton onClick={() => changeLanguage('en')}>
                    <StyledImg src={Usa} alt="Usa" />
                </IconButton>
        </Box>    
        </Box>
        </StyledHandleMenu>
      </Drawer>
    </>
  );
}

