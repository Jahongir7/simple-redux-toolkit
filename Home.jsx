import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const usernameState = useSelector((state) => state.user.value.username);
  return <div>Home {usernameState}</div>;
};

export default Home;
