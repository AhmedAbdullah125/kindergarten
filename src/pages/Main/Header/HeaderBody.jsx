import React from 'react'
import { NavLink } from 'react-router-dom'

export default function HeaderBody() {
    return (
        <div>
            <div className="header-content" >
                <h1>Gerne übernehmen wir eine Patenschaft für Ihr Kind</h1>
                
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis natus, qui consectetur nam accusantium id consequatur fuga dicta. Nobis asperiores hic, qui sint quasi ipsum libero similique sit optio accusantium?</p>
                <div className="explore">
                    <NavLink to='/courses'><button className='explore'>Explore Coursrs</button></NavLink>
                </div>
            </div>
        </div >
    )
}
