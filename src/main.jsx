import { createMuiTheme, ThemeProvider } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Router } from 'react-router-dom'
import App from './App'
import { AuthProvider } from './hooks/useAuth'
import './index.css'

const darkTheme = createMuiTheme({
  typography: {
    fontFamily: 'Uncut-Sans-Variable'
  },
  palette: {
    type: 'dark',
    primary: {
      main: 'rgb(255, 255, 255)',
      },
    secondary: {
      main: 'rgb(166, 213, 250)'
    }
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
