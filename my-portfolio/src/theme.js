import { createTheme, responsiveFontSizes } from '@mui/material/styles';

export let darkTheme = createTheme({
  palette: {
    background: {
      default: '#313131', //cinza escuro (cor de fundo)
    },
    secondBackground: {
      main: '#302f2f', //cinza (cor de fundo aba sobre)
    },
    text: {
      main: '#000', //preto (cor do texto no fundo escuro)
    },
    textBackgroundContrast:{
      main: '#000', //branco (cor do texto no fundo claro)
    },
    textNavbar:{
      main: '#fff' //branco (cor do texto da navbar)
    },
    border:{
      main: '#ebebeb' //cinza claro (cor da borda)
    },
    button:{
      main: '#8f8f8f' //preto (cor dos botões)
    },
    buttonHover:{
      main: '#ebebeb'
    }
  },
  typography: {
    fontFamily: "Poppins"
  },
});

export let lightTheme = createTheme({
  palette: {
    background: {
      default: '#e5e4e4', //cinza claro (cor de fundo)
    },
    secondBackground: {
      main: '#f2f2f2', //cinza (cor de fundo aba sobre)
    },
    text: {
      main: '#0a192f', //azul escuro (cor do texto no fundo claro)
    },
    textBackgroundContrast:{
      main: '#fff', //branco (cor do texto no fundo escuro)
    },
    textNavbar:{
      main: '#000' //preto (cor do texto da navbar)
    },
    border:{
      main: '#313131' //cinza escuro (cor da borda)
    },
    button:{
      main: '#0a192f' //azul escuro (cor dos botões)
    },
    buttonHover:{
      main: '#0410ad' //azul claro (cor do botão quando o mouse passa em cima)
    }
  },
  typography: {
    fontFamily: "Poppins"
  },
});


lightTheme = responsiveFontSizes(lightTheme)
darkTheme = responsiveFontSizes(darkTheme)