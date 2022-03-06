import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#005aa7',
    },
    success: {
      main: '#00953b',
    },
    error: {
      main: '#e41f1a',
    },
    background: {
      main: '#f2f2f2',
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
  },
  typography: {
    fontFamily: [
      'Source Sans Pro',
      'sans-serif',
    ].join(','),
  },
});

export default theme;
