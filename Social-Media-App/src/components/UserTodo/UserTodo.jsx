import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./UserTodo.module.scss";
import { fetchUserTodo } from "../../store/user";
import { Loader } from "../Loader/index.js";

export const UserTodo = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const userTodo = useSelector((state) => state.userTodo.userTodo);

  useEffect(() => {
    dispatch(fetchUserTodo(id));
  }, [id]);

  if (!userTodo.length) return <Loader />;

  return (
    <div className={styles.container}>
      {userTodo.map((el) => (
        <div key={el.id} className={styles.todoContainer}>
          <input type="checkbox" checked={el.completed} />
          <div>{el.title}</div>
        </div>
      ))}
    </div>
  );
};
