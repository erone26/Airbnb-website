import React from "react";
import PhotoGroup from "../Images/Group 77.png"

export default function Hero() {
    return(
        <div className="hero">
            <img
            src={PhotoGroup}
            />
            <h1 className="hero-h1">Online Experiences</h1>
            <p className="hero-p">Join unique interactive activities led by one-of-a-kind hosts--all without leaving home.</p>
        </div>
    )
}