import React from 'react'
import './GeneratedMeme.scss'
import axios from 'axios';
import { useParams } from 'react-router-dom';

function GeneratedMeme({ meme, backHandler }) {
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
            {console.log(meme.data)}
            <button onClick={backHandler}>Back</button>
            <div>
                <img src={meme.data.url} alt="generated meme" />
            </div>
            <button onClick={downloadMeme}>Download</button>
        </div>
    )
}

export default GeneratedMeme