import { applyMiddleware, combineReducers, createStore } from "redux";
import { usersListReducer } from "./users";
import { postsListReducer } from "./posts";
import { todoListReducer } from "./todo";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { createPostReducer } from "./posts";
import { userAlbumsReducer, userPageReducer, userPostsReducer } from "./user";
import { userTodoReducer } from "./user";
import { tabsReducer } from "./tabs";

const rootReducer = combineReducers({
  users: usersListReducer,
  posts: postsListReducer,
  todo: todoListReducer,
  createPost: createPostReducer,
  user: userPageReducer,
  userAlbums: userAlbumsReducer,
  userPosts: userPostsReducer,
  userTodo: userTodoReducer,
  tabs: tabsReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
