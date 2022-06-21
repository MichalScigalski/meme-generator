import React, { useState, useContext, useEffect } from 'react'
import Meme from "../Meme/Meme";
import SearchBox from '../SearchBox/SearchBox';
import './TemplateList.scss';
import axios from "axios";
import { MemeTemplatesContext } from '../../memeTemplatesContext';

const TemplateList = ({ setCurrentTemplate }) => {
    const [search, setSearch] = useState('');
    const [memeTemplates, setMemeTemplates] = useState([]);

    useEffect(() => {
        fetchTemplatesMeme();
    }, []);

    const fetchTemplatesMeme = () => {
        axios
        .get("https://api.imgflip.com/get_memes")
        .then(res => {
            setMemeTemplates(res.data.data.memes);
        })
        .catch(err => {
            console.log(err);
        });
    };

    const filteredTemplates = memeTemplates.filter((i) => i.name.toLowerCase().match(search.toLowerCase()));

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