import { addUserTodoFromApi } from "./userTodoReducer.js";

export const fetchUserTodo = (id) => {
  return (dispatch) => {
    fetch(`${import.meta.env.VITE_API_URL}/users/${id}/todos`)
      .then((response) => response.json())
      .then((json) => dispatch(addUserTodoFromApi(json)));
  };
};
