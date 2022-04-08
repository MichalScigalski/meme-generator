import React from 'react'
import './Navigation.scss'
import Logo from '../img/memegenicon.png';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <header className='Navigation'>
            <Link className='Navigation__Logo' to={"/"}>
                <img src={Logo} alt="memeIcon" />
                <span>Meme Generator</span>
            </Link>
            
        </header>
    )
}

export default Navigation
