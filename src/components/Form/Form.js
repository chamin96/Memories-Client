import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import useStyles from "./styles";
import { createPost, updatePost } from "../../actions/posts";

const Form = ({ currentId, setCurrentId }) => {
    const [postData, setpostData] = useState({
        title: "",
        message: "",
        tags: [],
        selectedFile: "",
    });
    const post = useSelector((state) =>
        currentId ? state.posts.find((p) => p._id === currentId) : null
    );
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem("profile"));

    useEffect(() => {
        if (post) setpostData(post);
    }, [post]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentId) {
            dispatch(
                updatePost(currentId, { ...postData, name: user?.result?.name })
            );
        } else {
            dispatch(createPost({ ...postData, name: user?.result?.name }));
        }

        clear();
    };

    const clear = () => {
        setCurrentId(null);
        setpostData({
            title: "",
            message: "",
            tags: [],
            selectedFile: "",
        });
    };

    if (!user?.result?.name) {
        return (
            <Paper className={classes.paper}>
                <Typography variant="h6" align="center">
                    Please sign in to create your posts and to like others' posts.
                </Typography>
            </Paper>
        );
    }

    return (
        <Paper className={classes.paper}>
            <form
                autoComplete="off"
                noValidate
                className={`${classes.root} ${classes.form}`}
                onSubmit={handleSubmit}
            >
                <Typography variant="h6">
                    {currentId ? "Update a" : "Create a new"} Memory
                </Typography>
                <TextField
                    id="title"
                    label="Title"
                    value={postData.title}
                    onChange={(e) => {
                        setpostData({ ...postData, title: e.target.value });
                    }}
                    variant="outlined"
                    fullWidth
                />
                <TextField
                    id="message"
                    label="Message"
                    multiline={true}
                    rows={5}
                    value={postData.message}
                    onChange={(e) => {
                        setpostData({ ...postData, message: e.target.value });
                    }}
                    variant="outlined"
                    fullWidth
                />
                <TextField
                    id="tags"
                    label="Tags"
                    value={postData.tags}
                    onChange={(e) => {
                        var tags = e.target.value.split(",");
                        setpostData({ ...postData, tags: tags });
                    }}
                    variant="outlined"
                    fullWidth
                />
                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) =>
                            setpostData({ ...postData, selectedFile: base64 })
                        }
                    />
                </div>
                <Button
                    className={classes.buttonSubmit}
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                    fullWidth
                >
                    Submit
                </Button>
                <Button
                    className={classes.buttonSubmit}
                    variant="outlined"
                    color="primary"
                    size="medium"
                    onClick={clear}
                    fullWidth
                >
                    Clear
                </Button>
            </form>
        </Paper>
    );
};

export default Form;
