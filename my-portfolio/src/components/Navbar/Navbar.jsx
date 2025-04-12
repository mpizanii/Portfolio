import { styled, AppBar, MenuItem, Toolbar, Box, IconButton } from "@mui/material"
import Brasil from "../../assets/images/Brasil.png"
import LightModeIcon from '@mui/icons-material/LightMode';

function Navbar() {
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
                <IconButton><StyledImg src={Brasil}/></IconButton>
                <MenuItem>Sobre</MenuItem>
                <MenuItem>Habilidades</MenuItem>
                <MenuItem>Projetos</MenuItem>
                <IconButton color="#0a192f"><LightModeIcon/></IconButton>
            </StyledToolbar>
        </AppBar>
      </>
    )
  }
  
  export default Navbar