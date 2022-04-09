import React, { useState } from 'react'
import './CreatingMeme.scss'
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom'
import undoIcon from '../img/undo.png';
import {
    Link
} from "react-router-dom";

function CreatingMeme({ template, backHandler, setCreatedMeme }) {
    let navigate = useNavigate();
    const [memeTextFirst, setMemeTextFirst] = useState('');
    const [memeTextSecond, setMemeTextSecond] = useState('');

    const objectToParam = obj => {
        const params = Object.entries(obj).map(([key, value]) => `${key}=${value}`);
        return "?" + params.join("&");
    };

    const createMeme = e => {
        e.preventDefault();
        const params = {
            template_id: template.id,
            username: process.env.REACT_APP_IMGFLIP_USERNAME,
            password: process.env.REACT_APP_IMGFLIP_PASSWORD,
            text0: memeTextFirst,
            text1: memeTextSecond,
        };
        axios
            .post(`https://api.imgflip.com/caption_image${objectToParam(params)}`)
            .then(res => {
                setCreatedMeme(res.data);
                const idMeme = res.data.data.page_url.split('/');
                navigate("/meme/" + idMeme[idMeme.length - 1]);
            })
            .catch(err => {
                console.log(err);
            });
    };
    return (
        <div className="creatingMeme">
            <a onClick={() => navigate(-1)}>
                <img src={undoIcon} alt="undoIcon" />
            </a>
            <form onSubmit={createMeme}>
                <img src={template.url} title={template.name} alt={template.name + '-img'} />
                <span>{template.name}</span>
                <input onChange={e => setMemeTextFirst(e.target.value)} type="text" placeholder="First text" />
                <input onChange={e => setMemeTextSecond(e.target.value)} type="text" placeholder="Second text" />
                <button type="submit">Create meme</button>
            </form>
        </div>
    )
}

export default CreatingMeme