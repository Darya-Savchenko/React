import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../UI/Button";
import { changeTab } from "../../store/tabs/tabsReducer.js";
import { UserAlbums } from "../UserAlbums";
import { UserPosts } from "../UserPosts";
import { UserTodo } from "../UserTodo";

export const Tabs = () => {
  const dispatch = useDispatch();
  const tabs = useSelector((state) => state.tabs.tabs);

  const onTab = (i) => {
    dispatch(changeTab(i));
  };

  return (
    <div>
      <Button onClick={() => onTab(1)}>Show User`s Albums</Button>
      <Button onClick={() => onTab(2)}>Show User`s Posts</Button>
      <Button onClick={() => onTab(3)}>Show User`s to do</Button>
      {tabs === 1 && <UserAlbums />}
      {tabs === 2 && <UserPosts />}
      {tabs === 3 && <UserTodo />}
    </div>
  );
};
