import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    palette: {
      primary: {
        main: '#bab7b7', 
      },
      secondary: {
        main: '#0a192f', 
      },
      background: {
        default: '#e5e4e4',
      },
      text:{
        main: '#313131'
      }
    },
    typography: {
      fontFamily: "Poppins"
    },
  });

theme = responsiveFontSizes(theme);

export default theme;