import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { GeneralRoutes } from "./routes/GeneralRoutes";
import { authReducer } from "./auth/authReducer";
import { AuthContext } from "./auth/AuthContext";

function App() {
  const initialState = {
    isAuthenticated:
      JSON.parse(localStorage.getItem("isAuthenticated")) || false,
    user: JSON.parse(localStorage.getItem("user")) || null,
  };
  const [state, dispatch] = React.useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <Router>
        <GeneralRoutes />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
