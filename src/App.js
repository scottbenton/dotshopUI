import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import MainEditPage from './Components/MainEditPage';
import { CssBaseline } from '@material-ui/core';


const theme = createMuiTheme({
  palette: {
    primary: { main: '#64e091' },
    secondary: { main: '#ffffff' }, // GREEN: #64e091 BLUE: #64b3e0
  },
  background: {
    default: '#f5f5f5'
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainEditPage />
    </ThemeProvider>
  );
}

export default App;
