import React, {useState} from 'react'
import './CreatingMeme.css'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

function CreatingMeme({ template, onClick, setCreatedMeme }) {
    let navigate = useNavigate();

    const [memeTextFirst, setMemeTextFirst] = useState("");
    const [memeTextSecond, setMemeTextSecond] = useState("");

    const objectToParam = (obj) => {
        const params = Object.entries(obj).map(([key, value]) => `${key}=${value}`);
        return "?" + params.join("&");
    };

    const createMeme = (e) => {
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
            .then((res) => {
                setCreatedMeme(res.data);
                navigate("/meme");
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className="creatingMeme">
            <button onClick={onClick}>Back to templates</button>
            <form onSubmit={createMeme}>
                <img src={template.url} title={template.name} alt={template.name + '-img'} />
                <input onChange={(e)=>setMemeTextFirst(e.target.value)} type="text" placeholder="first text" />
                <input onChange={(e)=>setMemeTextSecond(e.target.value)} type="text" placeholder="second text" />
                <button type="submit">Create meme</button>
            </form>
        </div>
    )
}

export default CreatingMeme