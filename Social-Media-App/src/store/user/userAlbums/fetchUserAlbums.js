import { addUserAlbumsFromApi } from "./userAlbumsReducer.js";

export const fetchUserAlbums = (id) => {
  return (dispatch) => {
    fetch(`${import.meta.env.VITE_API_URL}/users/${id}/albums`)
      .then((response) => response.json())
      .then((json) => dispatch(addUserAlbumsFromApi(json)));
  };
};
