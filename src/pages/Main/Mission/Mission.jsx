import React, { useEffect } from 'react'
import boy3 from '../../../assets/boy3.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Aos from 'aos'
import "aos/dist/aos.css"

export default function Mission() {
    useEffect(()=>{
        Aos.init();
    },[])
    
    return (
        <div className='mission'>
            <div className="welcome">
                <h2>Welcome To Smart Academy</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum modi ab laudantium eius, nam sapiente odit cum accusantium molestias, voluptatibus vel minus corporis corrupti commodi incidunt, dolorum tempora cupiditate officiis?</p>
                <div className="explore">
                    <button className='explore'>Read More</button>
                </div>
            </div>
            <div>
                <div className="img-center" data-aos="zoom-in" data-aos-duration="1000">
                    <div className="img-cont">
                        <img src={boy3}></img>
                    </div>
                </div>
            </div>
            <div className="our-mission">
                <h3>Out Mission</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid autem tenetur velit sapiente. Esse qui alias rerum possimus magni maxime, aperiam neque ipsa? Vitae voluptatem laudantium esse ad quam. Soluta.</p>
                <div className="mission-details">
                    <div className="colum">
                        <h3>5+</h3>
                        <p>Trained Teachers</p>
                    </div>
                    <div className="colum">
                        <h3>50+</h3>
                        <p>Geregistreerde kinderen</p>
                    </div>
                    <div className="colum">
                        <h3>10+</h3>
                        <p>Total Entertainements</p>
                    </div>
                </div>
            </div>
        </div>
    )
}