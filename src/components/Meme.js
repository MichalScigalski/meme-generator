import React from 'react'
import './Meme.css';

function Meme({ id, name, url, onClick }) {
    return (
        <div title={name} onClick={onClick} id={id} className="meme">
            <h1>{name}</h1>
            <img src={url} alt={name + '-image'} />
        </div>
    )
}

export default Meme