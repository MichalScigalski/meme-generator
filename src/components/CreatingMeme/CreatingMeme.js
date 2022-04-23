import React, { useState, useEffect } from 'react'
import './CreatingMeme.scss'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom'
import undoIcon from '../../assets/icons/undo.png';

const CreatingMeme = ({ template, setCreatedMeme }) => {
    let navigate = useNavigate();

    const [memeTextFirst, setMemeTextFirst] = useState('');
    const [memeTextSecond, setMemeTextSecond] = useState('');
    const { id } = useParams();

    const objectToParam = obj => {
        const params = Object.entries(obj).map(([key, value]) => `${key}=${value}`);
        return "?" + params.join("&");
    };
    // const getMemeById = (id) => memeTemplates.filter(meme => meme.id === id)[0];

    useEffect(()=>{
        if(template===null)
            navigate('/');
    },[template])

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
        <>
            {template ? <div className="CreatingMeme">
                <span className="backButton" onClick={() => navigate(-1)}>
                    <img src={undoIcon} alt="undoIcon" />
                </span>
                <h2>{id}</h2>
                <form onSubmit={createMeme}>
                    <img src={template.url} title={template.name} alt={template.name + '-img'} />
                    <span>{template.name}</span>
                    <input onChange={e => setMemeTextFirst(e.target.value)} type="text" placeholder="First text" />
                    <input onChange={e => setMemeTextSecond(e.target.value)} type="text" placeholder="Second text" />
                    <button className="button" type="submit">Create meme</button>
                </form>
            </div> : null}
        </>
    )
}

export default CreatingMeme