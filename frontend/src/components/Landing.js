import React from 'react'
import './Landing.css'
import logo from './../images/logo-cropped.jpg'
// import {Link} from "react-router-dom"

function Landing() {
  return (
    <div className="landing-container">
        <div className="landing-item"><img src={logo} alt="logo for the app"/></div>
        <div className="landing-item"><ul>
            <li>Go Gym</li>
            <li>Work Hard</li>
            <li>Track Yourself</li>
            </ul></div>
        <div className="landing-item"><p>Get Started</p></div>
    </div>
  )
}

export default Landing