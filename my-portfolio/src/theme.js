import { createTheme, responsiveFontSizes } from '@mui/material/styles';

export let lightTheme = createTheme({
  palette: {
    background: {
      default: '#e5e4e4', //cinza claro (cor de fundo)
    },
    primary: {
      main: '#bab7b7', //cinza (cor da navbar e de fundo para a aba sobre)
    },
    secondary: {
      main: '#0a192f', //azul escuro (cor das letras e botões)
    },
    border:{
      main: '#313131' //cinza escuro (cor da borda)
    },
    text:{
      main: '#fff' //branco (cor de letras para parte escura)
    }
  },
  typography: {
    fontFamily: "Poppins"
  },
});

export let darkTheme = createTheme({
  palette: {
    background: {
      default: '#313131', //cinza escuro (cor de fundo)
    },
    primary: {
      main: '#e5e4e4', //cinza claro (cor da navbar e de fundo para a aba sobre)
    },
    secondary: {
      main: '#ebebeb', 
    },
    border:{
      main: '#ebebeb'
    },
    text:{
      main: '#313131'
    }
  },
  typography: {
    fontFamily: "Poppins"
  },
});

lightTheme = responsiveFontSizes(lightTheme)
darkTheme = responsiveFontSizes(darkTheme)