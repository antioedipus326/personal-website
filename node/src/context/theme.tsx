import { createTheme, ThemeOptions } from '@mui/material/styles'
import { ThemeMode } from '../types'

export const getDesignTokens = (mode: ThemeMode): ThemeOptions => ({
  palette: mode === 'light'
    ? {
        mode,
        primary: {
          main: '#B88952',
          dark: '#8E6338',
          light: '#FFF9E8',
        },
        secondary: {
          main: '#B4C9A6',
          dark: '#89AA74',
          light: '#F4F7F2',
        },
        background: {
          default: '#698D53',
          paper: '#FFF9E8', 
        },
        text: {
          primary: '#000000',
          secondary: '#C05005',
        },
        divider: '#698D53',
      }
    : {
        mode,
        primary: {
          main: '#B88952',
          dark: '#8E6338',
          light: '#FFF9E8',
        },
        secondary: {
          main: '#B4C9A6',
          dark: '#89AA74',
          light: '#F4F7F2',
        },
        background: {
          default: '#394D2D',
          paper: '#1e1e1e',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#FDCFB0',
        },
        divider: '#394D2D',
      },
  typography: {
      // 1. Set the default fallback font family for the application
      fontFamily: '"Futura", "Helvetica", "Arial", sans-serif',
      
      // 2. Assign Garamond to all header variants
      h1: {
        fontFamily: '"Garamond", "Georgia", serif',
        fontSize: '2.5rem',
        lineHeight: 1.2,
        fontWeight: 450,
      },
      h2: { 
        fontFamily: '"Garamond", "Georgia", serif',
        fontSize: '2.5rem',
        lineHeight: 1.2,
        fontWeight: 450,
       },
      h3: { 
        fontSize: '1rem',
        lineHeight: 1,
        marginBottom: '1em',
      }
    },
  shape: {
    borderRadius: 2,
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 999,
          textTransform: 'none',
          fontFamily: 'inherit',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: 'inherit',
          textUnderlineOffset: '3px',
        },
      },
    },
  },
})

export const createAppTheme = (mode: ThemeMode) =>
  createTheme(getDesignTokens(mode))