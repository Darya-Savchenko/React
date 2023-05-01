import React from "react";
import styles from "./Textarea.module.scss";

export const Textarea = ({ id, label, ...inputProps }) => {
  return (
    <>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <textarea id={id} className={styles.textarea} {...inputProps} />
    </>
  );
};
