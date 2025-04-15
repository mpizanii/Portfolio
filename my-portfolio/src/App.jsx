import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./pages/sections/hero.jsx";
import Projects from "./pages/sections/projects.jsx";
import About from "./pages/sections/about.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material'
import { lightTheme, darkTheme } from "./theme.js";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("dark")

    return (
      <>
      <ThemeProvider theme= {theme === "light" ? lightTheme : darkTheme}>
        <CssBaseline/>
          <Navbar theme={theme} setTheme={setTheme}/>
          <Hero/>
          <About/>
          <Projects/>
          <Footer/>
      </ThemeProvider>
      </>
    )
  }
  
  export default App
