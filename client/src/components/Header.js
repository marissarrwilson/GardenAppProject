import React from 'react'
import "./Header.css";
import { Navbar, Nav, Button } from "react-bootstrap";

export default function Header(props) {

  return (

            <Navbar collapseOnSelect className="navBar" expand="md" variant="dark" fixed="top">
                <Navbar.Brand href="/" className="brandNav">
                  <h1><center>Get Growing <i class="fas fa-seedling"></i></center></h1>
                  <h5>Your Gardening e-Journal</h5>
                {/* <Button className="navBtn" href="/pantry" variant="secondary" active >My Pantry</Button> */}
                <Button className="navBtn" href="/feed" variant="secondary" active>My Feed</Button>
                <Button className="navBtn" href ="/post" variant="danger" active>+ New Post</Button>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="navLinks ml-auto mt-0 mt-lg-0">
                    <Nav.Link href="/login">Log in</Nav.Link>
                    <Nav.Link href="/signup">Sign Up</Nav.Link>
                </Nav>               
                </Navbar.Collapse>                
            </Navbar>

  )
}