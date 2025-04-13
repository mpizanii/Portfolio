import { styled, AppBar, MenuItem, Toolbar, IconButton } from "@mui/material"
import Brasil from "../../assets/images/Brasil.png"
import { useState } from "react";
import ThemeMode from "./ThemeMode";

function Navbar( {theme, setTheme} ) {
    const StyledToolbar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: "space-between"
      }))

    const StyledImg = styled("img")(() => ({
      width: "35px",
    }))

    return (
      <>
        <AppBar position="absolute">
            <StyledToolbar>
                <IconButton onClick={() => (console.log("brasil"))}><StyledImg src={Brasil}/></IconButton>
                <MenuItem onClick={() => (console.log("sobre"))}>Sobre</MenuItem>
                <MenuItem onClick={() => (console.log("habilidades"))}>Habilidades</MenuItem>
                <MenuItem onClick={() => (console.log("projetos"))}>Projetos</MenuItem>
                <ThemeMode theme={theme} setTheme={setTheme}/>
            </StyledToolbar>
        </AppBar>
      </>
    )
  }
  
export default Navbar