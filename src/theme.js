import { createTheme } from '@mui/material/styles';

export default function getTheme(darkMode) {
  return createTheme(getDesignTokens(darkMode ? 'dark' : 'light'));
}

// getDesignTokens is the term MUI uses in their example code,
// I think it refers to the object used in createTheme, where a token is each property.
// so getDesignTokens = define all the properties of the theme object.
const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
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
      }
      : {
        // palette values for dark mode
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
        action: {
          active: '#ffffff',
          hover: 'rgba(255, 255, 255, 0.08)',
          hoverOpacity: 0.08,
          selected: 'rgba(255, 255, 255, 0.16)',
          selectedOpacity: 0.16,
          disabled: 'rgba(255, 255, 255, 0.3)',
          disabledBackground: 'rgba(255, 255, 255, 0.12)',
          disabledOpacity: 0.38,
          focus: 'rgba(255, 255, 255, 0.12)',
          focusOpacity: 0.12,
          activatedOpacity: 0.24,
        },
      }),
  },
  typography: {
    ...(mode === 'light'
      ? {
        allVariants: { color: '#212121' },
        fontFamily: [
          'Source Sans Pro',
          'sans-serif',
        ].join(','),
      } : {
        allVariants: { color: '#FFFFFFDE' },
        fontFamily: [
          'Source Sans Pro',
          'sans-serif',
        ].join(','),
      }),
  },
  // This style override is needed to prevent
  // a semi-transparent white background-image from the default dark-mode mui provides
  // Has no effect on light mode
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});
