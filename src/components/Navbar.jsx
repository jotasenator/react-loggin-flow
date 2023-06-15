// Navbar.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

export const Navbar = () => {
  const { state, dispatch } = React.useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });
    navigate("/");
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/carnero">Carnero</Link>
        </li>
        <li>
          <Link to="/chivo">Chivo</Link>
        </li>
        <li>
          <Link to="/vaca">Vaca</Link>
        </li>
        <li className="app-user">
          <span>{state.user}</span>
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};
