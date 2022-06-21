import React from 'react'
import './Navigation.scss'
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

const Navigation = () => {
    return (
        <header className='Navigation'>
            <div className='Navigation__Logo' >
                <Link to={"/"} style={{ textDecoration: 'none' }}> <span>MemeGenerator</span> </Link>
                <div>
                    <FaGithub fontSize={22} />
                    <a href="https://github.com/MichalScigalski" target="_blank" rel="noreferrer">@MichalScigalski</a>
                </div>
            </div>
        </header>
    )
}

export default Navigation
