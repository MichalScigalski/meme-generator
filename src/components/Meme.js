import React from 'react'
import './Meme.css';
import {
    Link
} from "react-router-dom";

function Meme({ template, onClick }) {
    return (
        <Link to="/create" title={template.name} onClick={onClick} className="meme">
            <h1>{template.name}</h1>
            <img src={template.url} alt={template.name + '-image'} />
        </Link>
    )
}

export default Meme