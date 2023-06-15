import React from "react";
import { AuthContext } from "../auth/AuthContext";

export const ErrorMessage = ({ message, duration }) => {
  const { dispatch } = React.useContext(AuthContext);

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch({ type: "LOGIN_ERROR", payload: { error: null } });
    }, duration);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [dispatch, duration]);

  return <p className="error-message">{message}</p>;
};
