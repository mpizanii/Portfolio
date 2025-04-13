import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { IconButton } from '@mui/material';

function ThemeMode({ theme, setTheme }) {
  const themeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <IconButton onClick={themeToggle}>
      {theme === "light" ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
}

export default ThemeMode;
