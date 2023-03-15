import { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import "../public/styles.css"
import { lightTheme, darkTheme } from '../theme';

function MyApp({ Component, pageProps }: AppProps) {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('themeMode');
    if (savedTheme) {
      setThemeMode(savedTheme as 'light' | 'dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('themeMode', themeMode);
  }, [themeMode]);

  const toggleTheme = () => {
    setThemeMode((mode) => (mode === 'light' ? 'dark' : 'light'));
  };

  const theme = themeMode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} toggleTheme={toggleTheme} themeMode={themeMode} />
    </ThemeProvider>
  );
}

export default MyApp;
