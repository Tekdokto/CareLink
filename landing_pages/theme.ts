import { createTheme } from '@material-ui/core/styles';

// Light theme
export const lightTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#002868',
    },
    background: {
      default: '#fcf5ebcc',
    },
    secondary: {
      main: '#1874f4',
      light: '#F0B90B'
    },
  },
});

// Dark theme
export const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#90caf9',
    },
    background: {
      default: '#1a2236',
      paper: '#293145',
    },
    secondary: {
      main: '#293145',
      light: '#F0B90B'
    },
  },
});
