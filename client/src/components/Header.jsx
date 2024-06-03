import React from 'react'
import { Outlet } from 'react-router-dom'

const Header = () => {
  return (
    <div className="site-wrap" id="home-section">
        <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle" />
            </div>
        </div>
        <div className="site-mobile-menu-body" />
        </div>
        <header className="site-navbar site-navbar-target" role="banner">
        <div className="container">
            <div className="row align-items-center position-relative">
            <div className="col">
                <div className="site-logo">
                <a href="index.html">
                    <strong>Notary</strong>
                </a>
                </div>
            </div>
            <div className="col-9 text-right text-lg-left">
                <span className="d-inline-block d-lg-none">
                <a href="#" className=" site-menu-toggle js-menu-toggle py-5 ">
                    <span className="icon-menu h3 text-black" />
                </a>
                </span>
                <nav className="site-navigation text-right ml-auto d-none d-lg-block" role="navigation">
                <ul className="site-menu main-menu js-clone-nav ml-auto ">
                    <li className="active">
                    <a href="index.html" className="nav-link">Home</a>
                    </li>
                    <li className="has-children">
                    <a href="practice-areas.html" className="nav-link">Practice Areas</a>
                    <ul className="dropdown">
                        <li>
                        <a href="#">Bankruptcy Law</a>
                        </li>
                        <li>
                        <a href="#">Business Law</a>
                        </li>
                        <li>
                        <a href="#">Civil Rights Law</a>
                        </li>
                        <li>
                        <a href="#">Criminal Law</a>
                        </li>
                        <li>
                        <a href="#">Immigration Law</a>
                        </li>
                        <li>
                        <a href="#">Family Law</a>
                        </li>
                    </ul>
                    </li>
                    <li>
                    <a href="testimonials.html" className="nav-link">Testimonials</a>
                    </li>
                    <li>
                    <a href="about.html" className="nav-link">About</a>
                    </li>
                    <li>
                    <a href="contact.html" className="nav-link">Contact</a>
                    </li>
                </ul>
                </nav>
            </div>
            </div>
        </div>
        </header>
        <Outlet />
        <footer className="site-footer" style={{backgroundImage: 'url("images/hero_bg_footer.jpg")'}}>
            <div className="container">
            <div className="row">
                <div className="col-lg-3">
                <h2 className="footer-heading mb-4">About Us</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                <ul className="list-unstyled social">
                    <li>
                    <a href="#">
                        <span className="icon-facebook" />
                    </a>
                    </li>
                    <li>
                    <a href="#">
                        <span className="icon-instagram" />
                    </a>
                    </li>
                    <li>
                    <a href="#">
                        <span className="icon-twitter" />
                    </a>
                    </li>
                    <li>
                    <a href="#">
                        <span className="icon-linkedin" />
                    </a>
                    </li>
                </ul>
                </div>
                <div className="col-lg-8 ml-auto">
                <div className="row">
                    <div className="col-lg-3">
                    <h2 className="footer-heading mb-4">Quick Links</h2>
                    <ul className="list-unstyled">
                        <li>
                        <a href="#">About Us</a>
                        </li>
                        <li>
                        <a href="#">Testimonials</a>
                        </li>
                        <li>
                        <a href="#">Terms of Service</a>
                        </li>
                        <li>
                        <a href="#">Privacy</a>
                        </li>
                        <li>
                        <a href="#">Contact Us</a>
                        </li>
                    </ul>
                    </div>
                    <div className="col-lg-3">
                    <h2 className="footer-heading mb-4">Resources</h2>
                    <ul className="list-unstyled">
                        <li>
                        <a href="#">About Us</a>
                        </li>
                        <li>
                        <a href="#">Testimonials</a>
                        </li>
                        <li>
                        <a href="#">Terms of Service</a>
                        </li>
                        <li>
                        <a href="#">Privacy</a>
                        </li>
                        <li>
                        <a href="#">Contact Us</a>
                        </li>
                    </ul>
                    </div>
                    <div className="col-lg-3">
                    <h2 className="footer-heading mb-4">Support</h2>
                    <ul className="list-unstyled">
                        <li>
                        <a href="#">About Us</a>
                        </li>
                        <li>
                        <a href="#">Testimonials</a>
                        </li>
                        <li>
                        <a href="#">Terms of Service</a>
                        </li>
                        <li>
                        <a href="#">Privacy</a>
                        </li>
                        <li>
                        <a href="#">Contact Us</a>
                        </li>
                    </ul>
                    </div>
                    <div className="col-lg-3">
                    <h2 className="footer-heading mb-4">Company</h2>
                    <ul className="list-unstyled">
                        <li>
                        <a href="#">About Us</a>
                        </li>
                        <li>
                        <a href="#">Testimonials</a>
                        </li>
                        <li>
                        <a href="#">Terms of Service</a>
                        </li>
                        <li>
                        <a href="#">Privacy</a>
                        </li>
                        <li>
                        <a href="#">Contact Us</a>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            <div className="row pt-5 mt-5 text-center">
                <div className="col-md-12">
                <div className="border-top pt-5">
                    <p> Copyright ©  All rights reserved | This template is made with <i className="icon-heart text-danger" aria-hidden="true" /> by <a href="https://colorlib.com/" target="_blank">Colorlib</a>
                    </p>
                </div>
                </div>
            </div>
            </div>
        </footer>
    </div>
  )
}

export default Header