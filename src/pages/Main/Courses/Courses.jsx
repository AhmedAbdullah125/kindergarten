import React from 'react'
import cooking from '../../../assets/Courses/cooking.png';
import baking from '../../../assets/Courses/baking.png';
import crafting from '../../../assets/Courses/crafting.png';
import garden from '../../../assets/Courses/garden.png';
import outside from '../../../assets/Courses/outside.png';
import reading from '../../../assets/Courses/reading.png';
import sew from '../../../assets/Courses/sew.png';
import singing from '../../../assets/Courses/singing.png';
import Gardening from '../../../assets/Courses/Gardening.png';

export default function Courses() {
    let courses = [
        { id: 1, img: cooking, h: "Gemeinsames Frühstück " },
        { id: 2, img: singing, h: "Singen" },
        { id: 3, img: outside, h: "Unterhaltung im Freien" },
        { id: 4, img: baking, h: "Backen " },
        { id: 5, img: crafting, h: "Basteln " },
        { id: 6, img: reading, h: "Geschichten vorlesen " },
        { id: 7, img: garden, h: "Ausflüge" },
        { id: 8, img: sew, h: "Kunsthandwerk " },
        { id: 9, img: Gardening, h: "Feueranbau " },
    ]
    return (
        <div className='services courses'>
            <div className="services-title" data-aos="zoom-in-up" data-aos-duration="700">
                <h2>Unsere empfohlenen Kurse</h2>
            </div>
            <div className="courses-cont">
                {courses.map((ele) =>
                <div className="course hr-box" data-aos="zoom-in-up" data-aos-duration="700" key={ele.id}>
                    <div className="img-cont">
                        <img src={ele.img} alt="course" />
                    </div>
                    <h4>{ele.h}</h4>
                </div>
                )}
            </div>
        </div>
    )
}
