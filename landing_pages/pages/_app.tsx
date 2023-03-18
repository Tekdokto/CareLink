import { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import store from '../redux/store';
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
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} toggleTheme={toggleTheme} themeMode={themeMode} />
      </ThemeProvider>
    </Provider>
  );
}
export default MyApp;