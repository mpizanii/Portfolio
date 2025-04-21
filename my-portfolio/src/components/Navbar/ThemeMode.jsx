import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Box, styled } from '@mui/material';

const StyledBackgroundBox = styled(Box)(( { theme } ) => ({
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      backgroundColor: "#bab7b7",
      borderRadius: "90px",
      width: "75px",
      height: "35px",
      padding: "2.5px", 
    },
    [theme.breakpoints.up("md")]: {
      width: "80px",
      height: "40px",
    },
  }));

const StyledButtonIcon = styled(Box)(({ mode, theme }) => ({
    [theme.breakpoints.up("xs")]: {
      width: "30px",
      height: "30px",
      borderRadius: "50%",
      backgroundColor: mode === "dark" ? "#313131" : "#e5e4e4",
      color: mode === "dark" ? "#ffff00" : "#ffa500",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      left: mode === "light" ? "0" : "40px",
      transition: "left 0.3s ease-in-out, background-color 0.3s ease-in-out, color 0.3s ease-in-out"
    },
    [theme.breakpoints.up("md")]: {
      width: "35px",
      height: "35px",
    },
  }));

export default function ThemeMode({ theme, setTheme }) {
  const themeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <StyledBackgroundBox onClick={themeToggle}>
        <StyledButtonIcon mode={theme}>
          {theme === "light" ? <LightModeIcon /> : <DarkModeIcon />}
        </StyledButtonIcon>
    </StyledBackgroundBox>
  );
}