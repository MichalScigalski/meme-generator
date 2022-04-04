import React from 'react'
import './CreatingMeme.css'

function CreatingMeme({ name, url, key, onClick, onSubmit, handleTextTop, handleTextBottom }) {

    return (
        <div className="creatingMeme">
            <button onClick={onClick}>Back to templates</button>
            <form onSubmit={onSubmit}>
                <img src={url} title={name} alt={name + '-img'} />
                <input onChange={handleTextTop} type="text" placeholder="text on top" />
                <input onChange={handleTextBottom} type="text" placeholder="text on bottom" />
                <button type="submit">Create meme</button>
            </form>
        </div>
    )
}

export default CreatingMeme