import React from 'react';
import "./Home.css";
import { Container, Image, Button } from "react-bootstrap";
// import harvestImg from '../assets/images/harvest_resize.jpg';
import manImg from '../assets/images/man_resize_darken.jpg'
// import plantingImg from '../assets/images/planting_resize.jpg'

export default function Home(props) {

    return (
        <Container className="container container-fluid">
            <div className="mainImg">
            <Image src={manImg} w-100 />
            <div className="centered-img-overlay">
            <p>Track your plants and make the most of the season.</p>
            <Button href="/signup"><b>Sign Up Today!</b></Button>
            </div>
            </div>
            <div className="aboutUs">
                <h1>About Us</h1>
                <p>Get Growing was developed by a team of software developers who are passionate about gardening and growing their own food. This app will allow you to create a new post for every plant in your garden, make field notes and track your progress. You can also view posts by like-minded garden enthusiasts by viewing your feed.
                </p>
            </div>
        </Container>
    )
}

{/* <p>Track your plants and make the most of the season.</p>
<p>Track when you plant seeds and when you harvest.</p>
<p>See what you have growing by viewing your pantry.</p> */}