import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#005aa7',
    },
    secondary: {
      main: '#f2f2f2',
    },
    success: {
      main: '#00953b',
    },
    error: {
      main: '#e41f1a',
    },
    background: {
      main: '#f2f2f2',
      secondary: '#ffffff',
    },
    donutGood: {
      main: '#00953b',
    },
    donutModerate: {
      main: '#FDC73C',
    },
    donutPoor: {
      main: '#e41f1a',
    },
    donutVeryPoor: {
      main: '#4719A7',
    },
    pollutantWarning: {
      main: '#e41f1a',
    },
    link: {
      main: '#1A0DAB',
    },
  },
  typography: {
    fontFamily: [
      'Source Sans Pro',
      'sans-serif',
    ].join(','),
  },
});

const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#0091D2DE',
    },
    secondary: {
      main: '#212121',
    },
    contrast: {
      main: '#FFFFFF',
    },
    success: {
      main: '#00953b',
    },
    error: {
      main: '#e41f1a',
    },
    background: {
      main: '#121212',
      paper: '#212121',
    },
    text: {
      primary: '#FFFFFFDE',
      secondary: '#FFFFFFDE',
    },
    donutGood: {
      main: '#0b893d',
    },
    donutModerate: {
      main: '#f0c047',
    },
    donutPoor: {
      main: '#d2302d',
    },
    donutVeryPoor: {
      main: '#6d53a6',
    },
    pollutantWarning: {
      main: '#d22f2d',
    },
    link: {
      main: '#8AB4F8',
    },
  },
  typography: {
    allVariants: { color: '#FFFFFFDE' },
    fontFamily: [
      'Source Sans Pro',
      'sans-serif',
    ].join(','),
  },
});

export default function getTheme(darkMode) {
  if (darkMode === true) {
    return darkTheme;
  }
  return theme;
}
