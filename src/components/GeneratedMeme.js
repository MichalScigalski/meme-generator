import React from 'react'
import './GeneratedMeme.scss'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import undoIcon from '../img/undo.png';

function GeneratedMeme({ meme }) {
    let navigate = useNavigate();
    const { id } = useParams();
    const downloadMeme = () => {
        axios({
            url: meme.data.url,
            method: 'GET',
            responseType: 'blob',
        }).then(res => {
            const url = window.URL.createObjectURL(new Blob([res.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `meme-${id}.jpg`);
            document.body.appendChild(link);
            link.click();
        });
    }

    return (
        <div className="GeneratedMeme">
            <a className="backButton" onClick={() => navigate(-1)}>
                <img src={undoIcon} alt="undoIcon" />
            </a>
            <span>This is your new meme</span>
            <div className="GeneratedMeme__image">
                <img src={meme.data.url} alt="generated meme" />
            </div>
            <div className="GeneratedMeme__buttons">
                <button className="button" onClick={downloadMeme}>Download</button>
                <button className="button" onClick={() => navigate("/")}>Create another one</button>
            </div>
        </div>
    )
}

export default GeneratedMeme