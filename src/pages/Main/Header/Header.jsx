import React from 'react'
import NavBar from '../../SharedConponants/NavBar'
import HeaderBody from './HeaderBody'
import backgroundImg from '../../../assets/1.png';

export default function Header() {
    return (
        <div className='header' style={{backgroundImage: `url(${backgroundImg})`}}>

            <div className="overlay">
                <NavBar></NavBar>
                <HeaderBody></HeaderBody>
                
            </div>
        </div>
    )
}
