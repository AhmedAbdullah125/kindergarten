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
        { id: 1, img: singing, h: "Singen" },
        { id: 1, img: outside, h: "Unterhaltung im Freien" },
        { id: 1, img: baking, h: "Backen " },
        { id: 1, img: crafting, h: "basteln " },
        { id: 1, img: reading, h: "Geschichten vorlesen " },
        { id: 1, img: garden, h: "Ausflüge" },
        { id: 1, img: sew, h: "Kunsthandwerk " },
        { id: 1, img: Gardening, h: "Feueranbau " },
    ]
    return (
        <div className='services courses'>
            <div className="services-title" data-aos="zoom-in-up" data-aos-duration="700">
                <h2>Unsere empfohlenen Kurse</h2>
            </div>
            <div className="courses-cont">
                {courses.map((ele) =>
                <div className="course" data-aos="zoom-in-up" data-aos-duration="700">
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
