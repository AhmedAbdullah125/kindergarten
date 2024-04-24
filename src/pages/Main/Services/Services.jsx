import React, { useEffect } from 'react'
import icon1 from '../../../assets/Services/IconTeacher.png'
import icon2 from '../../../assets/Services/IconELearning.png'
import icon3 from '../../../assets/Services/IconCerticate.png'
import icon4 from '../../../assets/Services/IconScore.png'
import Aos from 'aos'
import "aos/dist/aos.css"
import { NavLink, useLocation } from 'react-router-dom'

export default function Services() {
    let location = useLocation().pathname;

    useEffect(() => {
        Aos.init();
    }, [])

    let servicesArr = [
        { id: 1, img: <img src={icon1} alt="icon" />, h31: "Professionelle", h32: "Lehrer", p: 'Wir haben professionelle Lehrer, die sich auf das Unterrichten von Kindern spezialisiert haben' },
        { id: 2, img: <i className="fa-regular fa-heart"></i>, h31: "Toleranter und", h32: "Rücksichtsvoller Umgang", p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { id: 3, img: <i className="fa-solid fa-clover"></i>, h31: "Gegenseitige", h32: "Achtung", p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { id: 4, img: <img src={icon2} alt="icon" />, h31: "Online", h32: "Kurse", p: 'Wir arbeiten daran, Online-Kurse in Kindergärten zu Kindergarten' },
        { id: 5, img: <img src={icon3} alt="icon" />, h31: "Zertifikatskurs", h32: "", p: 'Die von uns angebotenen Kurse sind nach wissenschaftlichen Studien akkreditiert' },
        { id: 6, img: <i className="fa-solid fa-building-wheat"></i>, h31: "Grenzen und", h32: "Regeln akzeptieren", p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { id: 7, img: <i className="fa-solid fa-bacon"></i>, h31: "Konflikte", h32: "verbal lösen", p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { id: 8, img: <i className="fa-solid fa-layer-group"></i>, h31: "Entwicklung jedes", h32: "einzelne Kindes", p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { id: 9, img: <i className="fa-solid fa-person-breastfeeding"></i>, h31: "Elternarbeit", h32: "", p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { id: 10, img: <img src={icon4} alt="icon" />, h31: "Besserer", h32: "Wert", p: 'Wir bieten zielgerichtete Inhalte, die Kindern bei der geistigen Reife und Entwicklung helfen' },
        { id: 11, img: <i className="fa-regular fa-handshake"></i>, h31: "Selbstwertgefühl ", h32: "", p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { id: 12, img: <i className="fa-solid fa-award"></i>, h31: "Selbstvertrauen ", h32: "", p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { id: 13, img: <i className="fa-solid fa-user-shield"></i>, h31: "Selbstständigkeit ", h32: "", p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { id: 14, img: <i className="fa-solid fa-fingerprint"></i>, h31: "Spezielle ", h32: "", p: 'Förderangebote für Vorschulkinder' },
    ]
    return (
        <div className="serv-cont" id='services' >
            <div className='services'>
                <div className="services-title" data-aos="fade-up" data-aos-duration="700">
                    <h2>Unsere pädagogische Arbeit </h2>
                </div>
                <div className={location === "/" ? "services-sers sers-mini" : "services-sers"}>
                    {servicesArr.map((ele) =>
                        <div className={location === "/" ? ele.id > 4 ? "service-col hr-box dis-non" : "service-col hr-box" : "service-col hr-box"} key={ele.id} data-aos="fade-up" data-aos-duration="1000">
                            <div className="icon">
                                {ele.img}
                            </div>
                            <h3>{ele.h31}<br />{ele.h32}</h3>
                            <p>{ele.p}</p>
                        </div>
                    )}
                </div>
                <div className={location==="/"?"explore":"explore hidden"} data-aos="fade-up" data-aos-duration="1000">
                    <NavLink to='/Services'><button className='explore'>Show More</button></NavLink>
                </div>
            </div>
        </div>
    )
}
