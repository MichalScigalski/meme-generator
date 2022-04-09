import React from 'react'
import SearchIcon from '../img/search.png';
import CloseIcon from '../img/close.png';
import './SearchBox.scss';

function SearchBox({ className, search, setSearch }) {
    return (
        <div className={`SearchBox ${className}`}>
            <img src={SearchIcon} alt="searchIcon" />
            <input type="text" placeholder="Type what template you looking for..." value={search} onChange={e => setSearch(e.target.value)} />
            <img src={CloseIcon} onClick={() => setSearch('')} alt="closeIcon" />
        </div>
    )
}

export default SearchBox