import { addUsersFromApi } from "./usersListReducer.js";

export const fetchUsers = () => {
  return (dispatch) => {
    fetch(`${import.meta.env.VITE_API_URL}/users`)
      .then((response) => response.json())
      .then((json) => dispatch(addUsersFromApi(json)));
  };
};
