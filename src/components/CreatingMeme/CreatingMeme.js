import React, { useState, useContext, useEffect } from 'react'
import './CreatingMeme.scss'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import undoIcon from '../../assets/icons/undo.png';
import { MemeContext } from '../../context/MemeContext';

const CreatingMeme = () => {
    let navigate = useNavigate();
    const { currentTemplateContext, setCreatedMemeContext } = useContext(MemeContext);
    const [memeTextFirst, setMemeTextFirst] = useState('');
    const [memeTextSecond, setMemeTextSecond] = useState('');

    useEffect(() => {
        if(currentTemplateContext.length<=0) {
            navigate('/');
        }
    }, []);

    const objectToParam = obj => {
        const params = Object.entries(obj).map(([key, value]) => `${key}=${value}`);
        return "?" + params.join("&");
    };

    const createMeme = e => {
        e.preventDefault();
        const params = {
            template_id: currentTemplateContext.id,
            username: process.env.REACT_APP_IMGFLIP_USERNAME,
            password: process.env.REACT_APP_IMGFLIP_PASSWORD,
            text0: memeTextFirst,
            text1: memeTextSecond,
        };
        axios
            .post(`https://api.imgflip.com/caption_image${objectToParam(params)}`)
            .then(res => {
                setCreatedMemeContext(res.data);
                const idMeme = res.data.data.page_url.split('/');
                navigate("/meme/" + idMeme[idMeme.length - 1]);
            })
            .catch(err => {
                console.log(err);
            });
    };
    return (
        <div className="CreatingMeme">
            <span className="backButton" onClick={() => navigate(-1)}>
                <img src={undoIcon} alt="undoIcon" />
            </span>
            <form onSubmit={createMeme}>
                <div>
                    <img src={currentTemplateContext.url} title={currentTemplateContext.name} alt={currentTemplateContext.name + '-img'} />
                </div>
                <span>{currentTemplateContext.name}</span>
                <input onChange={e => setMemeTextFirst(e.target.value)} type="text" placeholder="First text" />
                <input onChange={e => setMemeTextSecond(e.target.value)} type="text" placeholder="Second text" />
                <button className="button" type="submit">Create meme</button>
            </form>
        </div>
    )
}

export default CreatingMeme