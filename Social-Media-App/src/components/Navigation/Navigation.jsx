import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";
import { routes } from "../../const/routes.js";

export const Navigation = () => {
  return (
    <header className={styles.header}>
      <NavLink to={routes.main} className={styles.item}>
        Home
      </NavLink>
      <NavLink to={routes.users} className={styles.item}>
        Users
      </NavLink>
      <NavLink to={routes.posts} className={styles.item}>
        Posts
      </NavLink>
      <NavLink to={routes.todo} className={styles.item}>
        To do
      </NavLink>
    </header>
  );
};
