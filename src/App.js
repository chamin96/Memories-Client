import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Box, Container } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import PostDetails from "./components/PostDetails/PostDetails";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff3031",
    },
    secondary: {
      main: "#1b1f3b",
    },
  },
});

const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Box mt={12} mb={6}>
          <Container maxWidth="xl">
            <Switch>
              <Route
                path="/"
                exact
                component={() => <Redirect to="/posts" />}
              />
              <Route path="/posts" exact component={Home} />
              <Route path="/posts/search" exact component={Home} />
              <Route path="/posts/:id" component={PostDetails} />
              <Route
                path="/auth"
                component={() => (!user ? <Auth /> : <Redirect to="/posts" />)}
              />
            </Switch>
          </Container>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
