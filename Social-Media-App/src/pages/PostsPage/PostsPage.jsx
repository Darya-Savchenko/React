import React from "react";
import { PostList } from "../../components/PostList";
import { useDispatch, useSelector } from "react-redux";
import { createPostVisible } from "../../store/posts/createPostReducer.js";
import { CreatePost } from "../../components/CreatePost";
import { Button } from "../../UI/Button";

export const PostsPage = () => {
  const dispatch = useDispatch();
  const postVisible = useSelector((state) => state.createPost.visible);

  const showCreatePost = () => dispatch(createPostVisible());

  return (
    <div>
      <h1>This is the Posts page</h1>
      <Button onClick={showCreatePost}>Create new post</Button>
      {postVisible && <CreatePost />}
      <PostList />
    </div>
  );
};
