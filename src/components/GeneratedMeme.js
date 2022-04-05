import React from 'react'
import './GeneratedMeme.css'

function GeneratedMeme({ meme, onClick }) {
  return (
    <div className="GeneratedMeme">
        <button onClick={onClick}>Back</button>
        <img src={meme.data.url} alt="generated meme" />
    </div>
  )
}

export default GeneratedMeme