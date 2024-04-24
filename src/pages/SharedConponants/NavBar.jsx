import Dropdown from 'react-bootstrap/Dropdown';
import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/ABC 16.webp';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link} from 'react-scroll';
import { useLocation } from 'react-router-dom';

export default function NavBar() {
    let location = useLocation().pathname;
    return (
        <div className={location !== "/" ? "navbar navbarDark" : "navbar"}>
            <div className="navbar-cont">
                <div className="title">
                    <NavLink to="/"><LazyLoadImage src={logo}></LazyLoadImage></NavLink>
                </div>
                <div className="links">
                    {location !== "/" ? <NavLink to="/">About</NavLink> : <Link to="about" spy={true} smooth={true} offset={0} duration={100}>About</Link>}
                    {location !== "/" ? <NavLink to="/">Services</NavLink> : <Link to='services' spy={true} smooth={true} offset={0} duration={100}>Services</Link>}
                    {location !== "/" ? <NavLink to="/">Coursrs</NavLink> : <Link to="courses" spy={true} smooth={true} offset={0} duration={100}>Coursrs</Link>}
                    {location !== "/" ? <NavLink to="/">Testimonials</NavLink> : <Link to='testimonials' spy={true} smooth={true} offset={0} duration={100}>Testimonials</Link>}
                    {location !== "/" ? <NavLink to="/">Contact Us</NavLink> : <Link to='contact' spy={true} smooth={true} offset={0} duration={100}>Contact us</Link>}

                </div>
                <div className="explore">
                    <NavLink to='/courses'><button className='explore'>Explore Coursrs</button></NavLink>
                </div>
            </div>
            <div className="openicon">
                <Dropdown>
                    <Dropdown.Toggle variant="succfess" id="dropdown-basic">
                        <i className="fa-solid fa-bars"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href={location !== "/" ? "/" : "#about"}>
                            {location !== "/" ? <NavLink to="/">About</NavLink> : <Link to="about" spy={true} smooth={true} offset={0} duration={100}>About</Link>}
                        </Dropdown.Item>
                        <Dropdown.Item href={location !== "/" ? "/" : "#services"}>
                            {location !== "/" ? <NavLink to="/">Services</NavLink> : <Link to='services' spy={true} smooth={true} offset={0} duration={100}>Services</Link>}
                        </Dropdown.Item>
                        <Dropdown.Item href={location !== "/" ? "/" : "#services"}>
                            {location !== "/" ? <NavLink to="/">Coursrs</NavLink> : <Link to="courses" spy={true} smooth={true} offset={0} duration={100}>Coursrs</Link>}
                        </Dropdown.Item>
                        <Dropdown.Item href={location !== "/" ? "/" : "#testimonials"}>
                            {location !== "/" ? <NavLink to="/">Testimonials</NavLink> : <Link to='testimonials' spy={true} smooth={true} offset={0} duration={100}>Testimonials</Link>}
                        </Dropdown.Item>
                        <Dropdown.Item href={location !== "/" ? "/" : "#contact"}>
                            {location !== "/" ? <NavLink to="/">Contact us</NavLink> : <Link to='contact' spy={true} smooth={true} offset={0} duration={100}>Contact us</Link>}
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    )
}
