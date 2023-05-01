const defaultState = {
  userTodo: [],
};

export const userTodoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_USER_TODO_FROM_API":
      return { ...state, userTodo: [...action.payload] };
    default:
      return state;
  }
};

export const addUserTodoFromApi = (payload) => ({
  type: "ADD_USER_TODO_FROM_API",
  payload,
});
