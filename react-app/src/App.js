import React, { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import { Grid } from '@material-ui/core';
import { makeStyles, CssBaseline, Typography } from '@material-ui/core';
import { useAuth0 } from "@auth0/auth0-react";
import ROUTES, { RenderRoutes } from "./routes";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function App(props) {
  const { window } = props;
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <CssBaseline />
        <Navigation isAuthenticated={isAuthenticated} />
        <Grid className={classes.content} container spacing={3}>
          <Grid item>
            <p>Welcome to the app.</p>
            <RenderRoutes routes={ROUTES} />
          </Grid>
        </Grid>
    </div>
  );
}

export default App;
