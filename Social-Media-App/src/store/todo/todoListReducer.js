const defaultState = {
  todo: [],
};

export const todoListReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TODO_FROM_API":
      return { ...state, todo: [...action.payload] };
    case "TODO_COMPLETED":
      return {
        ...state,
        todo: state.todo.map((el) =>
          el.id === action.payload
            ? {
                ...el,
                completed: !el.completed,
              }
            : el
        ),
      };
    default:
      return state;
  }
};

export const addTodoFromApi = (payload) => ({
  type: "ADD_TODO_FROM_API",
  payload,
});

export const todoCompleted = (payload) => ({
  type: "TODO_COMPLETED",
  payload,
});
