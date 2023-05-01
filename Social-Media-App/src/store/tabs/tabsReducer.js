const defaultState = {
  tabs: null,
};

export const tabsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "CHANGE_TAB":
      return { ...state, tabs: action.payload };
    default:
      return state;
  }
};

export const changeTab = (payload) => ({
  type: "CHANGE_TAB",
  payload,
});
