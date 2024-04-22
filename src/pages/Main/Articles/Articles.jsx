import React from 'react'
import img1 from '../../../assets/Articles/1.png'
import img2 from '../../../assets/Articles/2.png'
import img3 from '../../../assets/Articles/3.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Articles() {
    let articles = [
        { img: img1, heading: "The Benefits of Enrolling Kids in Online Courses", para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { img: img2, heading: "Unlock Your Child's Potential with Online Courses for Kids", para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { img: img3, heading: "Engage and Inspire The Power of Online Courses for Kids", para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    ]
    return (
        <div className='articles main-page'>
            <div className="main-title">
                <h2 data-aos="fade-up" data-aos-duration="1000">Articles And Insight</h2>
            </div>
            <div className="all-articles">
                {articles.map((ele) =>
                    <div className="article" data-aos="fade-up" data-aos-duration="1000">
                        <div className="img-cont" key={ele}>
                            <LazyLoadImage src={ele.img}></LazyLoadImage>
                        </div>
                        <div className="text">
                            <h4 className='my-h4'>{ele.heading}</h4>
                            <p className='my-p'>{ele.para}</p>
                            <div className="explore">
                                <button className='explore'>Read More</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
