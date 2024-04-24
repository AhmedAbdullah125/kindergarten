import React from 'react'
import { Link } from 'react-scroll';


export default function Footer() {
    return (
        <div className='footer' >
            <div className="tint" data-aos="fade-left" data-aos-duration="700"  data-aos-easing="ease-in-sine">
                <h2>A B C || أ ب ت Kindergarten</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis dolor vel lacus laoreet tristique. Nunc bibendum justo</p>
                <div className="social">
                    <a href="fb.com"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="twitter.com"><i className="fa-brands fa-x-twitter"></i></a>
                    <a href="instegram.com"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://api.whatsapp.com/send/?phone=201013633154&text=Hello%20ABC"><i className="fa-brands fa-whatsapp"></i></a>
                </div>
            </div>
            <div className="links-div" data-aos="fade-left" data-aos-duration="700"  data-aos-easing="ease-in-sine">
                <h3>Content</h3>
                <div className="links">
                <Link to="about" spy={true} smooth={true} offset={0} duration={100}>About</Link>
                <Link to='services' spy={true} smooth={true} offset={0} duration={100}>Services</Link>
                <Link to="courses" spy={true} smooth={true} offset={0} duration={100}>Coursrs</Link>
                <Link to='testimonials' spy={true} smooth={true} offset={0} duration={100}>Testimonials</Link>
                </div>
                <div></div>

            </div>
        </div>
    )
}
