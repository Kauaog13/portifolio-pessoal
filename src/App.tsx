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
import { useEffect } from 'react'; // <-- IMPORTAR useEffect

function App() {

  // <-- ADICIONAR ESTE useEffect -->
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Atualiza as CSS Custom Properties na raiz (<html>)
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Limpa o event listener quando o componente desmontar
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Array de dependências vazio, roda apenas uma vez

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