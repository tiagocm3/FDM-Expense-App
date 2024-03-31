import "./navbar.css";
import logo from "./logo.jpg";
import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const isTrainingMainPage = location.pathname === "/TrainingMainPage";
  const isLoginPage = location.pathname === "/login";
  const isRegisterPage = location.pathname === "/register";

  if (isLoginPage) {
    return null;
  }

  if (isRegisterPage) {
    return null;
  }

  if (isTrainingMainPage) {
    return null;
  }

  return (
    <>
      <nav>
        <div className="navbar-left">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className="navbar-middle">
          <ul id="navbar">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/TrainingMainPage">Training Course</Link>
            </li>
            <li>
              <Link to="/expense">Expense</Link>
            </li>
            <li>
              <Link to="/support">Support</Link>
            </li>
          </ul>
        </div>

        <div className="navbar-right">
          <ul id="login">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Become a member</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
