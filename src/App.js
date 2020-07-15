import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './theme'
import MyComponent from "./MyComponent"

const App = () => (
<ThemeProvider theme={theme}>
  <CssBaseline />
  <MyComponent />
</ThemeProvider>
)

export default App
