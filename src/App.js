import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#6034b4",
        },
        secondary: {
            main: "#37474f",
        },
    },
});

const App = () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Container maxWidth="lg">
                    <Navbar />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/auth" exact component={Auth} />
                    </Switch>
                </Container>
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default App;
