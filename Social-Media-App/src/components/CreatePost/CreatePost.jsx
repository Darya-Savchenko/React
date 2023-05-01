import React from "react";
import { useDispatch } from "react-redux";
import { createPostInvisible } from "../../store/posts/createPostReducer.js";
import styles from "./CreatePost.module.scss";
import { useFormik } from "formik";
import { createNewPost } from "../../store/posts/postsListReducer.js";
import { v4 as uuidv4 } from "uuid";
import { Button } from "../../UI/Button";
import { Input } from "../../UI/Input";
import { Textarea } from "../../UI/Textarea";

export const CreatePost = () => {
  const dispatch = useDispatch();

  const onSubmit = (values, actions) => {
    dispatch(createNewPost(values));
    actions.resetForm();
    dispatch(createPostInvisible());
  };

  const hideCreatePost = () => dispatch(createPostInvisible());

  const formik = useFormik({
    initialValues: {
      userId: "",
      id: uuidv4(),
      title: "",
      body: "",
    },
    onSubmit,
  });

  return (
    <div className={styles.container} onClick={hideCreatePost}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <form className={styles.form} onSubmit={formik.handleSubmit}>
          <Input
            id="title"
            label="Title"
            value={formik.values.title}
            onChange={formik.handleChange}
            type="text"
            placeholder="Enter the title"
            onBlur={formik.handleBlur}
          />
          <Textarea
            id="body"
            label="Text:"
            value={formik.values.body}
            onChange={formik.handleChange}
            placeholder="Enter the text"
            onBlur={formik.handleBlur}
          />

          <Button type="submit">Create post</Button>
        </form>
        <Button onClick={hideCreatePost}>Hide this window</Button>
      </div>
    </div>
  );
};
