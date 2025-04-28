import { styled, AppBar, MenuItem, Toolbar, IconButton, Box } from "@mui/material"
import Brasil from "../../assets/images/Brasil.png"
import Usa from "../../assets/images/Usa.png"
import ThemeMode from "./ThemeMode";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import MenuLateral from "./MenuLateralMobile";
import MenuIdioma from "./MenuIdioma";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const StyledDesktopToolbar = styled(Toolbar)(( { theme } ) => ({
  [theme.breakpoints.up('xs')]: {
    display: "none"
  },
  [theme.breakpoints.up('md')]: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: theme.palette.background.default,
    color: theme.palette.textNavbar.main,
  },
}))

const StyledMobileToolbar = styled(Toolbar)(( { theme } ) => ({
  [theme.breakpoints.up('xs')]: {
    display: "flex",
    justifyContent: "space-between",
    height: "50px",
    backgroundColor: theme.palette.background.default,
    color: theme.palette.textNavbar.main,
  },
  [theme.breakpoints.up('md')]: {
    display: "none"
  },
}))

const StyledNavbarIcons = styled("img")(( { theme } ) => ({
  [theme.breakpoints.up("xs")]: {
    width: "30px",
  },
  [theme.breakpoints.up("md")]: {
    width: "35px",
  }
}))

const StyledRotatingLanguageIcon = styled(KeyboardArrowUpIcon, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ open }) => ({
  transition: 'transform 0.4s ease',
  transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
}));

export default function Navbar( {theme, setTheme, changeLanguage, t, currentLanguage} ) {
  const [menuLateralAberto, setMenuLateralAberto] = useState(false);
  const [menuIdiomaAberto, setMenuIdiomaAberto] = useState(false);
  
  const handleMenuClick = () => {
    setMenuLateralAberto(true);
  };
  
  const handleMenuIdiomaClick = () => {
    setMenuIdiomaAberto(prev => !prev);
  };
  
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <AppBar position="absolute">
        <StyledMobileToolbar>
          <IconButton onClick={handleMenuClick}>
            <MenuIcon/>
          </IconButton>
            <ThemeMode theme={theme} setTheme={setTheme}/>
          <MenuLateral menuLateralAberto = {menuLateralAberto} setMenuLateralAberto = {setMenuLateralAberto} StyledImg = {StyledNavbarIcons} changeLanguage={changeLanguage} t={t}/>
        </StyledMobileToolbar>
        <StyledDesktopToolbar>
          <Box display= "flex" alignItems="center">
            <StyledNavbarIcons src={currentLanguage === "pt" ? Brasil : Usa} />
            <IconButton onClick={handleMenuIdiomaClick}>
              <StyledRotatingLanguageIcon open={menuIdiomaAberto} />
            </IconButton>
            <MenuIdioma menuIdiomaAberto={menuIdiomaAberto} setMenuIdiomaAberto={setMenuIdiomaAberto} StyledImg={StyledNavbarIcons} changeLanguage={changeLanguage} t={t}/>
          </Box>
            <MenuItem onClick={() => scrollToSection("about")}>{t("information.about")}</MenuItem>
            <MenuItem onClick={() => scrollToSection("about")}>{t("information.skills")}</MenuItem>
            <MenuItem onClick={() => scrollToSection("projects")}>{t("information.projects")}</MenuItem>
            <ThemeMode theme={theme} setTheme={setTheme}/>
        </StyledDesktopToolbar>
      </AppBar>
    </>
  )
}