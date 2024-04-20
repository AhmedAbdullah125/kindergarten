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
                    <Link to="services"  spy={true}  smooth={true}  offset={0}  duration={500}    >Star Acadmy</Link>
                    <NavLink>About</NavLink>
                    <NavLink>Coursrs</NavLink>
                    <NavLink to='#services'>Services</NavLink>
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
                        <Dropdown.Item href="#/action-1"> Home</Dropdown.Item>
                        <Dropdown.Item href="#/action-2"> About</Dropdown.Item>
                        <Dropdown.Item href="#/action-3"> Coursrs</Dropdown.Item>
                        <Dropdown.Item href="#services"> Services</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    )
}
