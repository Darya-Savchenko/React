import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodo } from "../../store/todo";
import { useEffect } from "react";
import styles from "./TodoList.module.scss";
import { todoCompleted } from "../../store/todo/todoListReducer.js";
import { Loader } from "../Loader";

export const TodoList = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo.todo);

  useEffect(() => {
    dispatch(fetchTodo());
  }, []);

  const onCompleted = (id) => {
    dispatch(todoCompleted(id));
  };

  if (!todo.length) return <Loader />;

  return (
    <div>
      {todo.map((el) => (
        <label key={el.id} className={styles.todo}>
          <input
            type="checkbox"
            checked={el.completed}
            onChange={() => onCompleted(el.id)}
          />
          <div className={styles.userId}>{el.userId}</div>
          <div>{el.title}</div>
        </label>
      ))}
    </div>
  );
};
