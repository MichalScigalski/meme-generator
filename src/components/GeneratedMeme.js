import React from 'react'
import './GeneratedMeme.css'
import axios from 'axios';
import { useParams } from 'react-router-dom';

function GeneratedMeme({ meme, onClick }) {
    const { id } = useParams();
    const downloadMeme = () => {
        axios({
            url: meme.data.url,
            method: 'GET',
            responseType: 'blob',
        }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${id}.jpg`);
            document.body.appendChild(link);
            link.click();
        });
    }

    return (
        <div className="GeneratedMeme">
            {console.log(meme.data)}
            <button onClick={onClick}>Back</button>
            <div>
                <img src={meme.data.url} alt="generated meme" />
            </div>
            <a onClick={downloadMeme}>Download</a>
        </div>
    )
}

export default GeneratedMeme