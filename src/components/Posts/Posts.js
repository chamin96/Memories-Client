import React from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Post from "./Post/Post";
import Loader from "../Loader/Loader";
import useStyles from "./styles";

const Posts = ({ setCurrentId }) => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const classes = useStyles();

  if (!posts.length && !isLoading) {
    return (
      <div>
        No Posts Available <br />
        <Link to="/" color="primary">
          Back to Home Page
        </Link>
      </div>
    );
  }

  return isLoading ? (
    <Loader />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
