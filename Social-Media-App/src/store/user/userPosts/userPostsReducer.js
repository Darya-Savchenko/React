const defaultState = {
  userPosts: [],
};

export const userPostsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_USER_POSTS_FROM_API":
      return { ...state, userPosts: [...action.payload] };
    default:
      return state;
  }
};

export const addUserPostsFromApi = (payload) => ({
  type: "ADD_USER_POSTS_FROM_API",
  payload,
});
