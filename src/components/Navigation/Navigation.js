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
                    <a href="http://github.com/MichalScigalski">@MichalScigalski</a>
                </div>
            </Link>
        </header>
    )
}

export default Navigation
