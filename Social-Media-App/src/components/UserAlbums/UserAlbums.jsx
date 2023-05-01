import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserAlbums } from "../../store/user";
import styles from "./UserAlbums.module.scss";
import { Loader } from "../Loader/index.js";

export const UserAlbums = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const userAlbums = useSelector((state) => state.userAlbums.userAlbums);

  useEffect(() => {
    dispatch(fetchUserAlbums(id));
  }, [id]);

  if (!userAlbums.length) return <Loader />;

  return (
    <div className={styles.container}>
      {userAlbums.map((el) => (
        <div key={el.id} className={styles.albumsContainer}>
          {el.title}
        </div>
      ))}
    </div>
  );
};
