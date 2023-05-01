const defaultState = {
  posts: [],
};

export const postsListReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_POSTS_FROM_API":
      return { ...state, posts: [...action.payload] };
    case "CREATE_NEW_POST":
      return { ...state, posts: [...state.posts, action.payload] };
    default:
      return state;
  }
};

export const addPostsFromApi = (payload) => ({
  type: "ADD_POSTS_FROM_API",
  payload,
});

export const createNewPost = (payload) => ({
  type: "CREATE_NEW_POST",
  payload,
});
