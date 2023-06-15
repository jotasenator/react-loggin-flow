import React from "react";
import { AuthContext } from "../auth/AuthContext";
import { Login } from "../screens/Login";
import { Corral } from "../screens/Corral";

export const GeneralRoutes = () => {
  const { state } = React.useContext(AuthContext);

  return (
    <>
      {state.isAuthenticated ? (
        <>
          <Corral />
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </>
  );
};
