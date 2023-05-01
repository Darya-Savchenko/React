const defaultState = {
  user: {},
};

export const userPageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_USER_FROM_API":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export const addUserFromApi = (payload) => ({
  type: "ADD_USER_FROM_API",
  payload,
});
