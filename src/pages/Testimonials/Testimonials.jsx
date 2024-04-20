import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import student1 from '../../assets/Testimonials/1.png'
import student2 from '../../assets/Testimonials/2.png'
import student3 from '../../assets/Testimonials/3.png'
import student4 from '../../assets/Testimonials/4.png'
import student5 from '../../assets/Testimonials/5.png'
import student6 from '../../assets/Testimonials/6.png'
import student7 from '../../assets/Testimonials/7.png'
import student8 from '../../assets/Testimonials/8.png'
import student9 from '../../assets/Testimonials/9.png'
import student10 from '../../assets/Testimonials/10.png'


export default function Testimonials() {
    let testStudents = [
        { id: 1, img: student1, name: "Hamza Ahmed", openion: "Dieser Ort ist der Ort, den ich am meisten auf der Welt liebe. Ich liebe die Lehrer und ich liebe meine Kollegen" },
        { id: 2, img: student2, name: "Hamza Ahmed", openion: "Dieser Ort ist der Ort, den ich am meisten auf der Welt liebe. Ich liebe die Lehrer und ich liebe meine Kollegen" },
        { id: 3, img: student3, name: "Hamza Ahmed", openion: "Dieser Ort ist der Ort, den ich am meisten auf der Welt liebe. Ich liebe die Lehrer und ich liebe meine Kollegen" },
        { id: 4, img: student4, name: "Hamza Ahmed", openion: "Dieser Ort ist der Ort, den ich am meisten auf der Welt liebe. Ich liebe die Lehrer und ich liebe meine Kollegen" },
        { id: 5, img: student5, name: "Hamza Ahmed", openion: "Dieser Ort ist der Ort, den ich am meisten auf der Welt liebe. Ich liebe die Lehrer und ich liebe meine Kollegen" },
        { id: 6, img: student6, name: "Hamza Ahmed", openion: "Dieser Ort ist der Ort, den ich am meisten auf der Welt liebe. Ich liebe die Lehrer und ich liebe meine Kollegen" },
        { id: 7, img: student7, name: "Hamza Ahmed", openion: "Dieser Ort ist der Ort, den ich am meisten auf der Welt liebe. Ich liebe die Lehrer und ich liebe meine Kollegen" },
        { id: 8, img: student8, name: "Hamza Ahmed", openion: "Dieser Ort ist der Ort, den ich am meisten auf der Welt liebe. Ich liebe die Lehrer und ich liebe meine Kollegen" },
        { id: 9, img: student9, name: "Hamza Ahmed", openion: "Dieser Ort ist der Ort, den ich am meisten auf der Welt liebe. Ich liebe die Lehrer und ich liebe meine Kollegen" },
        { id: 10, img: student10, name: "Hamza Ahmed", openion: "Dieser Ort ist der Ort, den ich am meisten auf der Welt liebe. Ich liebe die Lehrer und ich liebe meine Kollegen" },
    ]
    return (
        <div className='testimonials'>
            <div className="main-title" >
                <h2>Unsere Erfahrungsberichte</h2>
            </div>
            <div className="slider1 slider">
                <Swiper 
                breakpoints={{
                    0: {
                        // width: 0,
                        slidesPerView: 1,
                    },
                    576: {
                        // width: 576,
                        slidesPerView: 1,
                    },
                    768: {
                        // width: 768,
                        slidesPerView: 1.3,
                    },
                    1200: {
                        // width: 120,
                        slidesPerView: 2.3,
                    },
                }}
                modules={[Autoplay]}
                    autoplay={{ delay: 2500, pauseOnMouseEnter: true }}
                    spaceBetween={50}
                    slidesPerView={2.3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {testStudents.map((ele) => <>
                        {ele.id < 6 ?
                            <SwiperSlide>
                                <div className="slide slide1" key={ele}>
                                    <div className="text">
                                        <h3>{ele.name}</h3>
                                        <p>{ele.openion}</p>

                                    </div>
                                    <div className="img-cont">
                                        <img src={ele.img} alt="student" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            : ""}
                    </>
                    )}

                </Swiper>
            </div>
            <div className="slider2 slider">
                <Swiper
                    breakpoints={{
                        0: {
                            // width: 0,
                            slidesPerView: 1,
                        },
                        576: {
                            // width: 576,
                            slidesPerView: 1,
                        },
                        768: {
                            // width: 768,
                            slidesPerView: 1.3,
                        },
                        1200: {
                            // width: 120,
                            slidesPerView: 2.4,
                        },
                    }}
                    modules={[Autoplay]}
                    autoplay={{ delay: 3700, pauseOnMouseEnter: true }}

                    spaceBetween={50}
                    slidesPerView={2.3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {testStudents.map((ele) => <>
                        {ele.id > 5 ?
                            <SwiperSlide>
                                <div className="slide slide2"  key={ele}>
                                <div className="img-cont">
                                        <img src={ele.img} alt="student" />
                                    </div>
                                    <div className="text">
                                        <h3>{ele.name}</h3>
                                        <p>{ele.openion}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            : ""}
                    </>
                    )}

                </Swiper>
            </div>
        </div>
    )
}
