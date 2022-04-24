import React from 'react'
import './Meme.scss';
import { Link } from "react-router-dom";

const Meme = ({ template, onClick }) => {
    return (
        <div className="meme">
            <Link to={`/create`} title={template.name} onClick={onClick} style={{ textDecoration: 'none', color: 'black' }}>
                <div className='meme__imgBox'>
                    <img src={template.url} alt={template.name + '-image'} />
                </div>
                <div className="meme__textBox">
                    <span>{template.name}</span>
                </div>
            </Link>
        </div>
    )
}

export default Meme