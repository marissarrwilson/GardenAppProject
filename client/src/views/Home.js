import React from 'react';
import "./Home.css";
import { Image, Button } from "react-bootstrap";
import manImg from '../assets/images/man_resize_darken.jpg'

export default function Home(props) {

    return (
        <div className="justify-content-center text-center">
            <div className="mainImg">
            <Image src={manImg} w-100 />
            <div className="centered-img-overlay">
            <p>Track your plants and make the most of the season.</p>
            <Button href="/register"><b>Sign Up Today!</b></Button>
            </div>
            </div>
            <div className="about">
            <div className="aboutApp">
                <h1>What is Get Growing?</h1>
                <p>Get Growing is an online platform that can be used to track your garden. It allows you, the mighty home gardener, to create a new post for every plant in your garden, make field notes and track your progress. You can also view posts by like-minded garden enthusiasts by viewing your feed. Get Growing makes it easy for you to save money by growing your own food during these economically challenging times.
                </p>
                <hr />
            </div>
            <div className="aboutUs">
                <h1>About Us</h1>
                <p>Get Growing was developed by a team of software developers who are passionate about gardening and growing their own food. This amazing team consists of Nathan Polomark, Ryan Browne, Marissa Wilson, Joejo and Niki Fereidooni.
                </p>
            </div>
            </div>
        </div>
    )
}
