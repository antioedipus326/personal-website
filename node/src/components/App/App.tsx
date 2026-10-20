import React, { useRef, useCallback } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import CardTree, { CardTreeRef } from '../CardTree/CardTree'
import { FloatingActions } from '../FloatingActions/floating-actions'

function App(): React.JSX.Element {
  const cardTreeRef = useRef<CardTreeRef | null>(null)

  const handleReset = useCallback(() => {
    if (cardTreeRef.current) {
      cardTreeRef.current.resetCardTree()
    }
  }, [])

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', padding: 2 }}>
      <Box
        sx={{
          width: '100%',
          maxWidth: 900,
          margin: '0 auto',
          p: 3,
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <CardTree ref={cardTreeRef} />
      </Box>

      {/* Floating Actions: positioned at the bottom-right, following the CardTree in tab order. */}
      <FloatingActions onReset={handleReset} />
    </Box>
  )
}

export default App