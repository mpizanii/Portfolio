import { IconButton, Box, Typography } from "@mui/material";
import Brasil from "../../assets/images/Brasil.png";
import Usa from "../../assets/images/Usa.png";
import { styled } from "@mui/material/styles";

const StyledHandleLanguageMenu = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    padding: "10px",
    borderRadius: "20px",
    backgroundColor: theme.palette.secondBackground.main,
    width: "120px",
    marginTop: "190px",
    left: "10px",
    transition: "all 0.3s ease-in-out",
    opacity: 0,
    transform: "translateY(-10px)",
    pointerEvents: "none",
}));

const StyledBackgroundMenu = styled(Box)(() => ({
    display:"flex",
    justifyContent:"flex-start",
    flexDirection:"column",
    height:"100%",
    marginTop:"10px",
    alignItems:"center"
}))

export default function MenuIdioma({ menuIdiomaAberto, setMenuIdiomaAberto, StyledImg, changeLanguage, t }) {
  return (
    <StyledHandleLanguageMenu
      sx={{
        opacity: menuIdiomaAberto ? 1 : 0,
        transform: menuIdiomaAberto ? 'translateY(0)' : 'translateY(-10px)',
        pointerEvents: menuIdiomaAberto ? 'auto' : 'none',
      }}
    >
      <StyledBackgroundMenu>
        <Typography variant="h6" borderBottom="2px solid black" textAlign="center" width="100%">{t("language")}</Typography>
        <Box display="flex" justifyContent="center" marginTop="5px">
          <IconButton onClick={() => {
            changeLanguage('pt');
            setMenuIdiomaAberto(false);  
          }}>
            <StyledImg src={Brasil} alt="Brasil" />
          </IconButton>
          <IconButton onClick={() => {
            changeLanguage('en');
            setMenuIdiomaAberto(false);  
          }}>
            <StyledImg src={Usa} alt="Usa" />
          </IconButton>
        </Box>
      </StyledBackgroundMenu>
    </StyledHandleLanguageMenu>
  );
}