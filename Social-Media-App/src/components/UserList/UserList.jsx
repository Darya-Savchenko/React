import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../store/users";
import styles from "./UserList.module.scss";
import { Loader } from "../Loader";
import { Link } from "react-router-dom";

export const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (!users.length) return <Loader />;

  return (
    <div>
      {users?.map((user) => (
        <Link to={`${user.id}`} className={styles.item} key={user.id}>
          <div>
            <span className={styles.span}>Name:</span> {user.name}
          </div>
          <div className={styles.username}>
            <span className={styles.span}>Username:</span> {user.username}
          </div>
        </Link>
      ))}
    </div>
  );
};
