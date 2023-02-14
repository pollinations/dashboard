// import { createMuiTheme, ThemeProvider } from '@mui/material'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Router } from 'react-router-dom'
import App from './App'
import { AuthProvider } from './hooks/useAuth'
import './index.css'

const darkTheme = createTheme({
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

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={darkTheme}>
        <BrowserRouter>
          <AuthProvider>
            <App />
          </AuthProvider>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
