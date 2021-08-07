import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Box, Container } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

const theme = createMuiTheme({
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
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Box mt={12} mb={6}>
          <Container maxWidth="lg">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/auth" exact component={Auth} />
            </Switch>
          </Container>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
