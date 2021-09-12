import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from 'react-router-dom';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#6ff7e8',
      main: '#2ec4b6',
      dark: '#009386',
      contrastText: '#000',
    },
    secondary: {
      light: '#ffd054',
      main: '#ff9f1c',
      dark: '#c67000',
      contrastText: '#000',
    },
  },
});

ReactDOM.render(
    <Auth0Provider
      domain={REACT_APP_domain}
      clientId={REACT_APP_clientId}
      redirectUri={window.location.origin}
    >
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Auth0Provider>,
  document.getElementById('root')
);