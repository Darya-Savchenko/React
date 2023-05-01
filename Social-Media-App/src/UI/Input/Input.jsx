import React from "react";
import styles from "./Input.module.scss";

export const Input = ({ id, label, ...inputProps }) => {
  return (
    <>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input id={id} className={styles.input} {...inputProps} />
    </>
  );
};
