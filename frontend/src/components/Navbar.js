import React from 'react';
import { Link } from 'react-router-dom';
import hamburgerbtn from '../images/menuBtn.svg'

export default function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-light bg-light fixed-top">
                <div className="container-fluid">
                    <div>
                        <button className="btn btn-light btn-sm" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                            <img src={hamburgerbtn} alt="toggle dowm menu" />
                        </button>
                        <span className="text mx-4">{props.currentPage} hello world</span>
                    </div>
                    <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About Us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
