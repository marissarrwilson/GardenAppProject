import React, { useContext } from "react";
import "./Header.css";
import { Navbar, Nav } from "react-bootstrap";
import UserContext from "../context/UserContext";
import { useHistory, NavLink } from "react-router-dom";

export default function Header(props) {
  const { userData, setUserData } = useContext(UserContext);

  const history = useHistory();

  const register = () => history.push("/register");
  const login = () => history.push("/login");

  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
  };

  return (
    <Navbar
      collapseOnSelect
      className="navBar"
      expand="md"
      variant="dark"
      fixed="top"
    >
      <Navbar.Brand className="brandNav">
        <h1>
          <center>
            Get Growing <i className="fas fa-seedling"></i>
          </center>
        </h1>
        <h5>Your Gardening e-Journal</h5>

        {userData.user ? (
          <div>
            <NavLink className="navBtn btn btn-primary" to="/" active="true">
              Home
            </NavLink>
            <NavLink
              className="navBtn btn btn-secondary"
              to="/feed"
              active="true"
            >
              My Garden
            </NavLink>
            <NavLink className="navBtn btn btn-danger" to="/post" active="true">
              + New Post
            </NavLink>
          </div>
        ) : (
          <div>
            <NavLink className="navBtn btn btn-primary" to="/" active="true">
              Home
            </NavLink>
            <NavLink
              className="navBtn btn btn-secondary"
              to="/feed"
              active="true"
            >
              Garden Feed
            </NavLink>
          </div>
        )}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="navLinks ml-auto mt-0 mt-lg-0">
          {userData.user ? (
            <Nav.Link onClick={logout} to="/">
              Log out
            </Nav.Link>
          ) : (
            <div>
              <Nav.Link onClick={login}>Log in</Nav.Link>
              <Nav.Link onClick={register}>Sign Up</Nav.Link>
            </div>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
