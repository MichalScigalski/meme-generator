import React from 'react'
import './CreatedMeme.scss'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import undoIcon from '../../assets/icons/undo.png';

const GeneratedMeme = ({ createdMeme }) => {
    let navigate = useNavigate();
    const { id } = useParams();

    const downloadMeme = () => {
        axios({
            url: createdMeme.data.url,
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
            <span>This is your new meme</span>
            <div className="GeneratedMeme__image">
                <img src={createdMeme.data.url} alt="generated meme" />
            </div>
            <div className="GeneratedMeme__buttons">
                <button className="button" onClick={downloadMeme}>Download</button>
                <button className="button" onClick={() => navigate("/")}>Create another one</button>
            </div>
        </div>
    )
}

export default GeneratedMeme