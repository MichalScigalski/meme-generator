import React from 'react'
import './GeneratedMeme.css'
function GeneratedMeme({ meme, onClick }) {
    return (
        <div className="GeneratedMeme">
            <button onClick={onClick}>Back</button>
            <div>
                <img src={meme.data.url} alt="generated meme" />
            </div>
            <a href={meme.data.url} target="_blank">Download</a>
        </div>
    )
}

export default GeneratedMeme