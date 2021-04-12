import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { useDispatch } from "react-redux";

import { getPosts } from "./actions/posts";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import memories from "./images/memories.png";
import useStyles from "./styels";

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
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="lg">
                <AppBar
                    className={classes.appBar}
                    position="static"
                    color="inherit"
                >
                    <Typography
                        className={classes.heading}
                        variant="h3"
                        align="center"
                    >
                        Memories
                    </Typography>
                    <img
                        className={classes.image}
                        src={memories}
                        alt="memories logo"
                        height="50"
                        width="50"
                    />
                </AppBar>
                <Grow in>
                    <Container>
                        <Grid
                            container
                            className={classes.mainContainer}
                            justify="space-between"
                            alignItems="stretch"
                            spacing={3}
                        >
                            <Grid item sm={12} md={8}>
                                <Posts setCurrentId={setCurrentId} />
                            </Grid>
                            <Grid item sm={12} md={4}>
                                <Form
                                    currentId={currentId}
                                    setCurrentId={setCurrentId}
                                />
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
            </Container>
        </ThemeProvider>
    );
};

export default App;
