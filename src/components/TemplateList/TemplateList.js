import React, { useState, useEffect } from 'react'
import Meme from "../Meme/Meme";
import SearchBox from '../SearchBox/SearchBox';
import './TemplateList.scss';
import axios from "axios";


const TemplateList = ({ setCurrentTemplate }) => {
    const [search, setSearch] = useState('');
    const [memeTemplates, setMemeTemplates] = useState([]);
    
    const fetchTemplatesMeme = () => {
        axios
        .get("https://api.imgflip.com/get_memes")
        .then(res => {
            let data = res.data.data.memes;
            setMemeTemplates(data);
        })
        .catch(err => {
            console.log(err);
        });
    };

    const filteredTemplates = memeTemplates.filter((i) => i.name.toLowerCase().match(search.toLowerCase()));

    
    useEffect(() => {
        fetchTemplatesMeme();
    }, []);
    
    return (
        <div className="TemplateList">
            <SearchBox className="TemplateList__searchBar" search={search} setSearch={setSearch} />
            <div className="TemplateList__memes">
                {filteredTemplates.map(el => (
                    <Meme
                        onClick={() => setCurrentTemplate(el)}
                        template={el}
                        key={el.id}
                    />
                ))}
            </div>
        </div>
    )
}

export default TemplateList