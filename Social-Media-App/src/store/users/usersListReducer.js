const defaultState = {
  users: [],
};

export const usersListReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_USERS_FROM_API":
      return { ...state, users: [...action.payload] };
    default:
      return state;
  }
};

export const addUsersFromApi = (payload) => ({
  type: "ADD_USERS_FROM_API",
  payload,
});
