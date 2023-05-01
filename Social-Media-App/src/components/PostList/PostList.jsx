import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPosts } from "../../store/posts";
import styles from "./PostList.module.scss";
import { Loader } from "../Loader";

export const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  if (!posts.length) return <Loader />;

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className={styles.post}>
          <div className={styles.title}>{post.title}</div>
          <div>{post.body}</div>
        </div>
      ))}
    </div>
  );
};
