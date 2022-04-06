import React from 'react'
import './CreatingMeme.css'
import { Redirect } from 'react-router-dom'

function CreatingMeme({ name, template, onClick, onSubmit, handleTextFirst, handleTextSecond }) {
    return (
        <div className="creatingMeme">
            <button onClick={onClick}>Back to templates</button>
            <form onSubmit={onSubmit}>
                <img src={template.url} title={template.name} alt={template.name + '-img'} />
                <input onChange={handleTextFirst} type="text" placeholder="first text" />
                <input onChange={handleTextSecond} type="text" placeholder="second text" />
                <button type="submit">Create meme</button>
            </form>
        </div>
    )
}

export default CreatingMeme