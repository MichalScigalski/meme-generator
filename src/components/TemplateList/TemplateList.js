import React, { useState } from 'react'
import Meme from "../Meme/Meme";
import SearchBox from '../SearchBox/SearchBox';
import './TemplateList.scss';

function TemplateList({ setCurrentTemplate, memeTemplates }) {
    const [search, setSearch] = useState('');
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