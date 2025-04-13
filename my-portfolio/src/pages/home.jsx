import Navbar from "../components/Navbar/Navbar"
import Hero from "./sections/hero"
import Projects from "./sections/projects"
import About from "./sections/about.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material'
import { lightTheme, darkTheme } from "../theme.js";
import { useState } from "react";

function Home() {
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
  
  export default Home