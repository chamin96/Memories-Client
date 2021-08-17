import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import PropTypes from "prop-types";
import {
  AppBar,
  Typography,
  Button,
  Toolbar,
  Avatar,
  useScrollTrigger,
  CssBaseline,
  Hidden,
  IconButton,
  List,
  ListItem,
  Divider,
  Drawer,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import logo from "../../images/dev_square_club-logo.png";

import useStyles from "./styles";

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 2 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

function Navbar(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const toggleDrawer = (value) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerOpen(value);
  };

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      {user ? (
        <List>
          <ListItem>
            <Typography className={classes.userName} variant="h5">
              Hello
            </Typography>
            <Typography className={classes.userName} variant="h5">
              {user.result.name}!
            </Typography>
          </ListItem>
          <Divider />
          <ListItem>
            <Button
              className={classes.logout}
              variant="contained"
              color="secondary"
              onClick={logout}
            >
              Sign Out
            </Button>
          </ListItem>
        </List>
      ) : null}
    </div>
  );

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
    setUser(null);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      {user ? (
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      ) : null}

      <ElevationScroll {...props}>
        <AppBar className={classes.appBar} color="inherit">
          {user ? (
            <Hidden mdUp>
              <IconButton
                edge="end"
                className={classes.menuButton}
                color="secondary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
          ) : null}
          <Link to="/" className={classes.brandContainer}>
            <img
              className={classes.image}
              src={logo}
              alt="dev square club logo"
              height="60"
            />
          </Link>
          <Toolbar className={classes.toolbar}>
            {user ? (
              <div className={classes.profile}>
                <Avatar
                  className={classes.avatar}
                  alt={user.result.name}
                  src={user.result.imageUrl}
                >
                  {user.result.name.charAt(0)}
                </Avatar>
                <Hidden smDown>
                  <Typography className={classes.userName} variant="h6">
                    {user.result.name}
                  </Typography>
                  <Button
                    className={classes.logout}
                    variant="contained"
                    color="secondary"
                    onClick={logout}
                  >
                    Logout
                  </Button>
                </Hidden>
              </div>
            ) : (
              <>
                <Button
                  component={Link}
                  to="/auth"
                  variant="contained"
                  color="primary"
                >
                  Sign In
                </Button>
              </>
            )}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </div>
  );
}

export default Navbar;
