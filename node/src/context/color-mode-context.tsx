import React, { createContext, useMemo, useState, useContext } from 'react'
import { ThemeMode, ColorModeContextProps } from '../types'

// The context object should have the structure defined in ColorModeContextProps
// and be initialized with default values.
export const ColorModeContext = createContext<ColorModeContextProps>({
  mode: 'light',
  toggleColorMode: () => {},
})

/**
 * Custom hook for easy access to the color mode context.
 */
export const useColorMode = () => useContext(ColorModeContext)

interface ColorModeProviderProps {
  children: React.ReactNode;
}

/**
 * Manages the theme mode state and provides the toggle function.
 * This is where the light/dark mode logic resides.
 */
export const ColorModeProvider: React.FC<ColorModeProviderProps> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>(
    // Initialize mode based on user's system preference or local storage
    (window.matchMedia('(prefers-color-scheme: light)').matches ? 'dark' : 'light') as ThemeMode,
  )

  // Memoize the context value to prevent unnecessary re-renders of consumers.
  const colorMode = useMemo(
    () => ({
      mode,
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    [mode],
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      {children}
    </ColorModeContext.Provider>
  )
}