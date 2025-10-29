import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParallaxBackground from './components/ParallaxBackground';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ParallaxBackground />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Resume />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
