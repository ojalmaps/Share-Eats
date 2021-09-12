import React from "react";
import Navigation from "./components/Navigation";
import { Grid } from '@material-ui/core';
import { makeStyles, CssBaseline } from '@material-ui/core';
import { useAuth0 } from "@auth0/auth0-react";
import ROUTES, { RenderRoutes } from "./routes";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  toolbar: theme.mixins.toolbar,
}));

function App(props) {
  const { isAuthenticated } = useAuth0();
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <CssBaseline />
        <Navigation isAuthenticated={isAuthenticated} />
        <Grid className={classes.content}>
        <div className={classes.toolbar} />
          <RenderRoutes routes={ROUTES} />
        </Grid>
    </div>
  );
}

export default App;
