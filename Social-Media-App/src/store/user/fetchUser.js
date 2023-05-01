import { addUserFromApi } from "./userPageReducer.js";

export const fetchUser = (id) => {
  return (dispatch) => {
    fetch(`${import.meta.env.VITE_API_URL}/users/${id}`)
      .then((response) => response.json())
      .then((json) => dispatch(addUserFromApi(json)));
  };
};
