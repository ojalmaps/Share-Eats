import React from 'react';
import LogoutButton from "./LogoutButton";
import { AppBar, Typography, Toolbar, IconButton, makeStyles, Divider, List, ListItem, ListItemText, Hidden, Drawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useTheme } from '@material-ui/core';
import { ListItemIcon } from '@material-ui/core';
import { Link } from 'react-router-dom';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ListIcon from '@material-ui/icons/List';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import StarIcon from '@material-ui/icons/Star';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    drawer: {
        [theme.breakpoints.up('sm')]: {
          width: drawerWidth,
          flexShrink: 0,
        },
      },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      }
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: drawerWidth,
        },
      },
    title: {
      flexGrow: 1,
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
      },
  }));

function Navigation({ isAuthenticated, window }) {
    const classes = useStyles();
    const theme = useTheme();

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <>
            <div className={classes.toolbar} onClick={handleDrawerToggle} />
            <Divider />
            <List>
                <ListItem button key='Profile' component={Link} to="/profile">
                    <ListItemIcon><AccountBoxIcon /></ListItemIcon>
                    <ListItemText primary='Profile' />
                </ListItem>
                <ListItem button key='Feed' component={Link} to="/feed">
                    <ListItemIcon><ListIcon /></ListItemIcon>
                    <ListItemText primary='Feed' />
                </ListItem>
                <ListItem button key='Recommendations' component={Link} to="/recommendationlist">
                    <ListItemIcon><ThumbUpAltIcon/></ListItemIcon>
                    <ListItemText primary='Recommendations' />
                </ListItem>
                <ListItem button key='Wishlist' component={Link} to="/wishlist">
                    <ListItemIcon><StarIcon /></ListItemIcon>
                    <ListItemText primary='Wishlist' />
                </ListItem>

                <ListItem>
                    <ListItemIcon><ExitToAppIcon /></ListItemIcon>
                    <LogoutButton />
                </ListItem>
            </List>
        </>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <IconButton 
                    edge="start" 
                    className={classes.menuButton} 
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerToggle}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    ShareEats
                </Typography>
            </Toolbar>
        </AppBar>

        <nav className={classes.drawer} aria-label="Menu">
            <Hidden smUp implementation="css">
                <Drawer
                    container={container}
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    {drawer}
                </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
                <Drawer
                    classes={{
                    paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    open
                >
                    {drawer}
                </Drawer>
            </Hidden>
        </nav>
        </>
    );
}

export default Navigation;