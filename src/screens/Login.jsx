import React from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { ErrorMessage } from "../components/ErrorMessage";

export const Login = () => {
  const { state: authState, dispatch } = React.useContext(AuthContext);
  const navigate = useNavigate();
  const initialState = { username: "", password: "" };
  const [state, setState] = React.useState(initialState);

  const handleOnChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (state.username !== "" && state.password !== "") {
      if (
        (state.username === "admin" && state.password === "admin") ||
        (state.username === "gallega" && state.password === "gallega")
      ) {
        dispatch({
          type: "LOGIN",
          payload: { user: state.username },
        });
        navigate("/");
      } else {
        dispatch({
          type: "LOGIN_ERROR",
          payload: { error: "Incorrect username or password" },
        });
        setState(initialState);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={state.username}
          onChange={handleOnChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={state.password}
          onChange={handleOnChange}
        />
        <button type="submit">Login</button>
      </form>
      {authState.error && (
        <ErrorMessage message={authState.error} duration={2500} />
      )}
    </>
  );
};
