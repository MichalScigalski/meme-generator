import React, { useState, useContext } from 'react'
import Meme from "../Meme/Meme";
import SearchBox from '../SearchBox/SearchBox';
import './TemplateList.scss';
import { MemeContext } from '../../context/MemeContext';

const TemplateList = () => {
    const [search, setSearch] = useState('');
    const { memeTemplatesContext } = useContext(MemeContext);

    const filteredTemplates = memeTemplatesContext.filter((i) => i.name.toLowerCase().match(search.toLowerCase()));

    return (
        <div className="TemplateList">
            <SearchBox className="TemplateList__searchBar" search={search} setSearch={setSearch} />
            <div className="TemplateList__memes">
                {filteredTemplates.map(meme => (
                    <Meme
                        meme={meme}
                        key={meme.id}
                    />
                ))}
            </div>
        </div>
    )
}

export default TemplateList