import React from 'react';
import { Link } from 'react-router-dom';
import hamburgerbtn from '../images/menuBtn.svg'
import profileImg from '../images/profileImg.svg'

export default function Navbar(props) {
    return (
        <>
            <nav class="navbar navbar-light bg-light fixed-top">
                <div class="container-fluid">
                    <div>
                        <button class="btn btn-light btn-sm" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                            <img src={hamburgerbtn} alt="toggle dowm menu" />
                        </button>
                        <span class="text mx-4">{props.currentPage} hello world</span>
                    </div>
                    <Link to="/profile"><img src={profileImg} alt="My profile" /></Link>
                    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/about">About Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
