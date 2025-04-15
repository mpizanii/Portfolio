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


export function MenuLateral({ menuAberto, setMenuAberto, StyledImg}) {
  return (
    <>
      <Drawer anchor="left" open={menuAberto} onClose={() => setMenuAberto(false)}>
        <StyledHandleMenu>
        <Typography variant= "h6" borderBottom="2px solid black" textAlign="center" width="100%">Matheus Pizani</Typography>
            <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" marginTop="5px">
                <MenuItem onClick={() => console.log("sobre")}>Sobre</MenuItem>
                <MenuItem onClick={() => console.log("habilidades")}>Habilidades</MenuItem>
                <MenuItem onClick={() => console.log("projetos")}>Projetos</MenuItem>
            </Box>       
        <Box display="flex" justifyContent="flex-start" flexDirection="column" height="100%" marginTop="10px" alignItems="center">
            <Typography variant= "h6" borderBottom="2px solid black" textAlign="center" width="100%">Idioma</Typography>
                <Box display="flex" justifyContent="space-evenly" marginTop="5px">
                <IconButton onClick={() => console.log("brasil")}>
                    <StyledImg src={Brasil} alt="Brasil" />
                </IconButton>
                <IconButton onClick={() => console.log("usa")}>
                    <StyledImg src={Usa} alt="Usa" />
                </IconButton>
        </Box>    
        </Box>
        </StyledHandleMenu>
      </Drawer>
    </>
  );
}

