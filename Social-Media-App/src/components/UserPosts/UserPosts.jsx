import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserPosts } from "../../store/user";
import styles from "./UserPosts.module.scss";
import { Loader } from "../Loader/index.js";

export const UserPosts = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const userPosts = useSelector((state) => state.userPosts.userPosts);

  useEffect(() => {
    dispatch(fetchUserPosts(id));
  }, [id]);

  if (!userPosts.length) return <Loader />;

  return (
    <div className={styles.container}>
      {userPosts.map((el) => (
        <div key={el.id} className={styles.postsContainer}>
          <div className={styles.postTitle}>{el.title}</div>
          <div className={styles.postBody}>{el.body}</div>
        </div>
      ))}
    </div>
  );
};
