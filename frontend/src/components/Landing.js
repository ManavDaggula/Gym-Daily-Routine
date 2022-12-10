import React from 'react'
import logo from './../images/brand-logo.svg'
// import {Link} from "react-router-dom"

function Landing() {
	return (
		<div className="container d-flex justify-content-around align-items-center flex-column" style={{height:"100vh"}}>
			<div className="">
				<img src={logo} alt="logo for the app" /></div>
			<div className="fw-bold">
				<h2 className='fs-big' id='slogan-1'>Go Gym</h2>
				<h2 className='fs-big' id='slogan-2'>Work Hard</h2>
				<h2 className='fs-big' id='slogan-3'>Track Yourself</h2>
			</div>
			<button type="button" className="btn btn-primary btn-lg">Get Started</button>
		</div>
	)
}

export default Landing;