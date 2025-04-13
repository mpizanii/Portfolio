import Navbar from "../components/Navbar/Navbar"
import Hero from "./sections/hero"
import Projects from "./sections/projects"
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material'
import { lightTheme, darkTheme } from "../theme.js";
import { useState } from "react";

function Home() {
  const [theme, setTheme] = useState("light")

    return (
      <>
      <ThemeProvider theme= {theme === "light" ? lightTheme : darkTheme}>
        <CssBaseline/>
        <Navbar theme={theme} setTheme={setTheme}/>
        <Hero/>
      </ThemeProvider>
      </>
    )
  }
  
  export default Home