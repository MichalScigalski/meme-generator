import React, { useState } from 'react'
import Meme from "./Meme";
import SearchIcon from '../img/search.png';
import CloseIcon from '../img/close.png';
import './TemplateList.scss';

function TemplateList({setCurrentTemplate, memeTemplates}) {
    const [search, setSearch] = useState('');
    return (
        <main className="TemplateList">
            <div className="TemplateList__searchBar">
                <img src={SearchIcon} alt="searchIcon" />
                <input type="text" placeholder="Type what template you looking for..." value={search} onChange={(e) => setSearch(e.target.value)} />
                <img src={CloseIcon} onClick={() => setSearch('')} alt="searchIcon" />
            </div>
            <div className="TemplateList__memes">
                {memeTemplates.filter((i) => i.name.toLowerCase().match(search.toLowerCase())).map(el => (
                    <Meme
                        onClick={()=>setCurrentTemplate(el)}
                        template={el}
                        key={el.id}
                    />
                ))}
            </div>
        </main>
    )
}

export default TemplateList