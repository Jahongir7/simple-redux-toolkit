import { useState } from "react";
import { login, logout } from "./store";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [username, setUsername] = useState("");

  const dispatch = useDispatch();
  const usernameState = useSelector((state) => state.user.value.username);

  return (
    <div>
      <h1>Login {usernameState}</h1>
      <input onChange={(e) => setUsername(e.target.value)} />
      <button onClick={() => dispatch(login({ username: username }))}>
        Login
      </button>
      <button onClick={() => dispatch(logout())}>Log out</button>
    </div>
  );
};

export default Login;
