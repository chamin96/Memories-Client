import React, { useState, useEffect } from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getPosts } from "../../actions/posts";

import Posts from "../Posts/Posts";
import Form from "../Form/Form";

import useStyles from "./styles";

function Home() {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
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
    );
}

export default Home;
