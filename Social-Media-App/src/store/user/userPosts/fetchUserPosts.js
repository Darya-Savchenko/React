import { addUserPostsFromApi } from "./userPostsReducer.js";

export const fetchUserPosts = (id) => {
  return (dispatch) => {
    fetch(`${import.meta.env.VITE_API_URL}/users/${id}/posts`)
      .then((response) => response.json())
      .then((json) => dispatch(addUserPostsFromApi(json)));
  };
};
