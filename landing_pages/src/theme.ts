import { createTheme } from '@material-ui/core/styles';

// Light theme
export const lightTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#0070f3',
    },
    secondary: {
      main: '#19857b',
    },
    background: {
      default: '#fff',
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
    secondary: {
      main: '#a5d6a7',
    },
    background: {
      default: '#121212',
      paper: '#1f1f1f',
    },
  },
});
