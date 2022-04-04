import React from 'react'
import './CreatingMeme.css'

function CreatingMeme({ name, url, key, onClick, onSubmit }) {

    return (
        <div className="creatingMeme">
            <button onClick={onClick}>Back to templates</button>
            <form onSubmit={onSubmit}>
                <img src={url} title={name} alt={name + '-img'} />
                <input type="text" name="text0" placeholder="text on top" />
                <input type="text" name="text1" placeholder="text on bottom" />
                <button type="submit">Create meme</button>
            </form>
        </div>
    )
}

export default CreatingMeme