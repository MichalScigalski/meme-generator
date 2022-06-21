import React from 'react'
import './GeneratedMeme.scss'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import undoIcon from '../../assets/icons/undo.png';

const GeneratedMeme = () => {
    let navigate = useNavigate();
    const { id } = useParams();
    const memeUrl = `https://i.imgflip.com/${id}.jpg`;

    const downloadMeme = () => {
        axios({
            url: memeUrl,
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
            <span className="backButton" onClick={() => navigate(-1)}>
                <img src={undoIcon} alt="undoIcon" />
            </span>
            <h2>This is your new meme</h2>
            <div className="GeneratedMeme__image">
                <img src={memeUrl} alt="generated meme" />
            </div>
            <div className="GeneratedMeme__buttons">
                <button className="button" onClick={downloadMeme}>Download</button>
                <button className="button" onClick={() => navigate("/")}>Create another one</button>
            </div>
        </div>
    )
}

export default GeneratedMeme