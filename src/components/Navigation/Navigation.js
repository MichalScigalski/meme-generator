import React from 'react'
import './Navigation.scss'
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <header className='Navigation'>
            <Link className='Navigation__Logo' to={"/"}>
                <span>MemeGenerator</span>
            </Link>
        </header>
    )
}

export default Navigation
