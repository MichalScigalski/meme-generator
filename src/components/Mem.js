import React from 'react'
import './Mem.css';
function Mem({ id, name, url, onClick }) {
    return (
        <div onClick={onClick} id={id} className="mem">
            <h1>{name}</h1>
            <img src={url} alt={name + '-image'} />
        </div>
    )
}

export default Mem