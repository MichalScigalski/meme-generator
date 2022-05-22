import React from 'react'
import './Navigation.scss'
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

const Navigation = () => {
    return (
        <header className='Navigation'>
            <Link className='Navigation__Logo' to={"/"}>
                <span>MemeGenerator</span>
                <div>
                    <FaGithub fontSize={22}/>
                    <a href="https://github.com/MichalScigalski" target="_blank" rel="noreferrer">@MichalScigalski</a>
                </div>
            </Link>
        </header>
    )
}

export default Navigation
