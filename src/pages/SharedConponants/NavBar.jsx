import Dropdown from 'react-bootstrap/Dropdown';
import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/ABC 16.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

export default function NavBar() {

    
    return (
        <div className='navbar'>
            <div className="navbar-cont">
                <div className="title">
                    <NavLink><LazyLoadImage src={logo}></LazyLoadImage></NavLink>
                </div>
                <div className="links">
                    <Link to="about"  spy={true} smooth={true} offset={0} duration={100}>About</Link>
                    <Link to="courses"  spy={true} smooth={true} offset={0} duration={100}>Coursrs</Link>
                    <Link to='services'  spy={true} smooth={true} offset={0} duration={100}>Services</Link>
                    <Link to='testimonials'  spy={true} smooth={true} offset={0} duration={100}>Testimonials</Link>
                </div>
                <div className="explore">
                    <button className='explore'>Explore Coursrs</button>
                </div>
            </div>
            <div className="openicon">
                <Dropdown>
                    <Dropdown.Toggle variant="succfess" id="dropdown-basic">
                        <i class="fa-solid fa-bars"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1"> <Link to="about"  spy={true} smooth={true} offset={0} duration={100}>About</Link>   </Dropdown.Item>
                        <Dropdown.Item href="#/action-2"> <Link to="courses"  spy={true} smooth={true} offset={0} duration={100}>Coursrs</Link>  </Dropdown.Item>
                        <Dropdown.Item href="#/action-3"> <Link to='services'  spy={true} smooth={true} offset={0} duration={100}>Services</Link></Dropdown.Item>
                        <Dropdown.Item href="#services"> <Link to='testimonials'  spy={true} smooth={true} offset={0} duration={100}>Testimonials</Link></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    )
}
