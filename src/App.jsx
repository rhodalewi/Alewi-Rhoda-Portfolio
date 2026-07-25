import { Box } from "@chakra-ui/react";
import { Toaster } from "./components/ui/toaster";
import About from "./components/About";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { Footer } from "./components/ReusableCards";


const App = () => {
  return (
    <Box>
      <Toaster />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </Box>
  )
}

export default App;
