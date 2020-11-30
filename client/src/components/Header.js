import React, { useContext } from "react";
import "./Header.css";
import { Navbar, Nav, Button } from "react-bootstrap";
import UserContext from "../context/UserContext";
import { useHistory,NavLink } from "react-router-dom";



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

    <Navbar collapseOnSelect className="navBar" expand="md" variant="dark" fixed="top">
        <Navbar.Brand href="/" className="brandNav">
          <h1><center>Get Growing <i class="fas fa-seedling"></i></center></h1>
          <h5>Your Gardening e-Journal</h5>
        {/* <Button className="navBtn" href="/pantry" variant="secondary" active >My Pantry</Button> */}
        <NavLink className="navBtn" to="/feed" variant="secondary" active>My Feed</NavLink>
        <NavLink className="navBtn" to ="/post" variant="danger" active>+ New Post</NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="navLinks ml-auto mt-0 mt-lg-0">
          {userData.user ? (
            <Nav.Link onClick={logout} href="/">Log out</Nav.Link>
          ) : (
            <div>
              <Nav.Link onClick={login} >Log in</Nav.Link>
              <Nav.Link onClick={register} >Sign Up</Nav.Link>
            </div>
          )}
        </Nav>               
        </Navbar.Collapse>                
      </Navbar>

  )
}