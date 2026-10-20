import { createTheme, ThemeOptions } from '@mui/material/styles'
import { ThemeMode } from '../types'
import { amber, blueGrey, deepOrange } from '@mui/material/colors'

// Function to generate the theme object based on the mode
export const getDesignTokens = (mode: ThemeMode): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        // Light Mode
        primary: {
          main: '#0070c7', // Professional Blue
          light: '#5395f1',
          dark: '#00529d',
        },
        secondary: blueGrey,
        background: {
          default: '#f8f9fa', // Light, subtle off-white
          paper: '#ffffff',
        },
        text: {
          primary: '#212529',
          secondary: '#6c757d',
        },
      }
      : {
        // Dark Mode
        primary: {
          main: '#6bb6ff', // Lighter blue for dark background
        },
        secondary: {
          main: blueGrey[300],
        },
        divider: blueGrey[800],
        background: {
          default: '#1a1a1a', // Dark background
          paper: '#2c2c2c', // Slightly lighter for elevated elements
        },
        text: {
          primary: '#e0e0e0',
          secondary: '#b0b0b0',
        },
      }),
  },
  typography: {
    fontFamily: [
      '-apple-system', 
      'BlinkMacSystemFont', 
      '"Segoe UI"', 
      'Roboto', 
      '"Helvetica Neue"', 
      'Arial', 
      'sans-serif',
    ].join(','),
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: ({ theme }: { theme: any}) => ({
          borderRadius: 8,
          textTransform: 'none',
        }),
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    // The Card styles are now moved to components/CardItem.tsx using styled()
  },
})

/**
 * Creates a theme object for consumption by the ThemeProvider.
 * @param mode 'light' or 'dark'
 * @returns A fully configured MUI Theme object.
 */
export const createAppTheme = (mode: ThemeMode) => createTheme(getDesignTokens(mode))