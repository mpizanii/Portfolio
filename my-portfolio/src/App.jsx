import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./pages/sections/hero.jsx";
import Projects from "./pages/sections/projects.jsx";
import About from "./pages/sections/about.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material'
import { lightTheme, darkTheme } from "./theme.js";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./i18n.js";

function App() {
  const [theme, setTheme] = useState("light");
  const {t, i18n} = useTranslation();
  const currentLanguage = i18n.language || "pt";

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

    return (
      <>
      <ThemeProvider theme= {theme === "light" ? lightTheme : darkTheme}>
        <CssBaseline/>
          <Navbar theme={theme} setTheme={setTheme} changeLanguage={changeLanguage} t={t} currentLanguage={currentLanguage}/>
          <Hero t={t}/>
          <About t={t}/>
          <Projects t={t}/>
          <Footer t={t}/>
      </ThemeProvider>
      </>
    )
  }
  
  export default App
