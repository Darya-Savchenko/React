const defaultState = {
  visible: false,
};

export const createPostReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "CREATE_POST_VISIBLE":
      return { ...state, visible: true };
    case "CREATE_POST_INVISIBLE":
      return { ...state, visible: false };
    default:
      return state;
  }
};

export const createPostVisible = (payload) => ({
  type: "CREATE_POST_VISIBLE",
  payload,
});

export const createPostInvisible = (payload) => ({
  type: "CREATE_POST_INVISIBLE",
  payload,
});
