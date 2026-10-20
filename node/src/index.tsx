import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider, CssBaseline } from '@mui/material'
import App from './components/App'
import { ColorModeProvider, useColorMode } from './context/color-mode-context'
import { createAppTheme } from './context/theme'
import './index.css'

const ThemeWrapper: React.FC = () => {
  const { mode } = useColorMode()
  const theme = React.useMemo(() => createAppTheme(mode), [mode])
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  )
}

const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error('Could not find root element to mount to')
}
const root = ReactDOM.createRoot(rootElement)

root.render(
  <React.StrictMode>
    <ColorModeProvider>
      <ThemeWrapper />
    </ColorModeProvider>
  </React.StrictMode>,
)