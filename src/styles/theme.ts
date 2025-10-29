export const theme = {
  colors: {
    primary: {
      dark: '#030526',
      main: '#070A40',
      card: '#161A73',
      interactive: '#262DA6',
      accent: '#00CFF6',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#E0E0E0',
      muted: '#B0B0B0',
    },
    background: {
      primary: '#030526',
      secondary: '#070A40',
      card: '#161A73',
    }
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    xxl: '4rem',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px',
  },
  typography: {
    fontFamily: {
      primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      mono: "'Fira Code', 'Courier New', monospace",
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
    },
  },
  shadows: {
    sm: '0 2px 4px rgba(0, 207, 246, 0.1)',
    md: '0 4px 8px rgba(0, 207, 246, 0.15)',
    lg: '0 8px 16px rgba(0, 207, 246, 0.2)',
    glow: '0 0 20px rgba(0, 207, 246, 0.3)',
  },
  transitions: {
    fast: '0.2s ease',
    normal: '0.3s ease',
    slow: '0.5s ease',
  }
};

export type Theme = typeof theme;
