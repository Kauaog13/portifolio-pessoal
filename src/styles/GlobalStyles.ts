import { createGlobalStyle } from 'styled-components';
import { Theme } from './theme';

export const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body {
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary.dark} 0%, ${({ theme }) => theme.colors.primary.main} 100%);
    color: ${({ theme }) => theme.colors.text.primary};
    line-height: 1.6;
    overflow-x: hidden;
    min-height: 100vh;
  }

  #root {
    position: relative;
    overflow-x: hidden;
    /* Cria um novo contexto de empilhamento */
    isolation: isolate; 

    &::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      
      /* z-index: 1 coloca o efeito ATRÁS do conteúdo e NA FRENTE do fundo */
      z-index: 1;

      background: radial-gradient(
        circle 500px at var(--mouse-x, -500px) var(--mouse-y, -500px),
        rgba(0, 0, 0, 0) 0%,     /* Centro transparente */
        rgba(0, 0, 0, 0.5) 100%  /* Bordas escuras */
      );

      /* Desativa o efeito em telas menores (tablets/celulares) */
      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        display: none;
      }
    }
  }

  /* *** ESTA É A CORREÇÃO PRINCIPAL ***
    Força todo o conteúdo principal (seções e footer) a ter 
    position: relative e z-index: 2.
    Isso os coloca NA FRENTE do 'spotlight' (que tem z-index: 1).
  */
  section, footer {
    position: relative;
    z-index: 2;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.2;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    font-family: inherit;
  }

  input, textarea {
    font-family: inherit;
  }

  ::selection {
    background: ${({ theme }) => theme.colors.primary.accent};
    color: ${({ theme }) => theme.colors.primary.dark};
  }
`;