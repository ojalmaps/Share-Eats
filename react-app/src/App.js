import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import { Grid } from '@material-ui/core';
import Content from "./components/Content";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  return (
    <>
        <Header isAuthenticated={isAuthenticated} />
        <Grid container spacing={3}>
          <Grid item>
            <p>Welcome to the app.</p>

            {isAuthenticated ? (
              <Content />
            ) : (
              "Please log in."
            )}
          </Grid>
        </Grid>
    </>
  );
}

export default App;
