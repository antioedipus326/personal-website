import React from 'react'
import { Box, Fab, Stack } from '@mui/material'
import RestartAltIcon from '@mui/icons-material/RestartAlt'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { useColorMode } from '../../context/color-mode-context'

interface FloatingActionsProps {
  onReset: () => void;
}

/**
 * Renders floating action buttons (FABs) fixed to the bottom-right of the screen.
 */
export const FloatingActions: React.FC<FloatingActionsProps> = React.memo(({ onReset }) => {
  const { mode, toggleColorMode } = useColorMode()

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        // Ensure the FABs are above the main content and modal backdrops
        zIndex: (theme: any) => theme.zIndex.appBar + 1, 
      }}
    >
      <Stack spacing={2}>
        {/* Reset/Collapse All Button */}
        <Fab 
          color="primary" 
          aria-label="Reset and collapse all cards" 
          onClick={onReset}
          size="medium"
        >
          <RestartAltIcon />
        </Fab>

        {/* Theme Toggle Button */}
        <Fab 
          color="secondary" 
          aria-label={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
          onClick={toggleColorMode}
          size="medium"
        >
          {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
        </Fab>
      </Stack>
    </Box>
  )
})

FloatingActions.displayName = 'FloatingActions'