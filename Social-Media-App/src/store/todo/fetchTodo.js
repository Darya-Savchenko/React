import { addTodoFromApi } from "./todoListReducer.js";

export const fetchTodo = () => {
  return (dispatch) => {
    fetch(`${import.meta.env.VITE_API_URL}/todos`)
      .then((response) => response.json())
      .then((json) => dispatch(addTodoFromApi(json)));
  };
};
