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
  // necessary for content to be below app bar
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
          <Grid item>
            <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
            facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
            tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
            consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
            vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
            hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
            tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
            nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
            accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
          </Typography>
            </Grid>
        </Grid>
    </div>
  );
}

export default App;
