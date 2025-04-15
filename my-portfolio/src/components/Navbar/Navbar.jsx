import { styled, AppBar, MenuItem, Toolbar, IconButton, Button, Box } from "@mui/material"
import Brasil from "../../assets/images/Brasil.png"
import Usa from "../../assets/images/Usa.png";
import ThemeMode from "./ThemeMode";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { MenuLateral } from "./MenuLateralMobile";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const StyledDesktopToolbar = styled(Toolbar)(( { theme } ) => ({
  [theme.breakpoints.up('xs')]: {
    display: "none"
  },
  [theme.breakpoints.up('md')]: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: theme.palette.background.default,
    color: theme.palette.textNavbar.main
  },
}))

export const StyledMobileToolbar = styled(Toolbar)(( { theme } ) => ({
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

const StyledImg = styled("img")(( { theme } ) => ({
  [theme.breakpoints.up("xs")]: {
    width: "30px",
  },
  [theme.breakpoints.up("md")]: {
    width: "35px",
  }
}))

function Navbar( {theme, setTheme} ) {
  const [menuAberto, setMenuAberto] = useState(false);

  const handleMenuClick = () => {
    setMenuAberto(true);
  };

  return (
    <>
      <AppBar position="absolute">
        <StyledMobileToolbar>
          <IconButton onClick={handleMenuClick}>
            <MenuIcon/>
          </IconButton>
            <ThemeMode theme={theme} setTheme={setTheme}/>
          <MenuLateral menuAberto = {menuAberto} setMenuAberto = {setMenuAberto} StyledImg = {StyledImg}/>
        </StyledMobileToolbar>
        <StyledDesktopToolbar>
          <Box>
            <IconButton onClick={() => (console.log("brasil"))}><StyledImg src={Brasil}/></IconButton>
            <IconButton onClick={() => (console.log("Usa"))}><KeyboardArrowDownIcon/></IconButton>
          </Box>
            <MenuItem onClick={() => (console.log("sobre"))}>Sobre</MenuItem>
            <MenuItem onClick={() => (console.log("habilidades"))}>Habilidades</MenuItem>
            <MenuItem onClick={() => (console.log("projetos"))}>Projetos</MenuItem>
            <ThemeMode theme={theme} setTheme={setTheme}/>
        </StyledDesktopToolbar>
      </AppBar>
    </>
  )
}
  
export default Navbar