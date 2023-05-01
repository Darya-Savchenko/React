const defaultState = {
  userAlbums: [],
};

export const userAlbumsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_USER_ALBUMS_FROM_API":
      return { ...state, userAlbums: [...action.payload] };
    default:
      return state;
  }
};

export const addUserAlbumsFromApi = (payload) => ({
  type: "ADD_USER_ALBUMS_FROM_API",
  payload,
});
