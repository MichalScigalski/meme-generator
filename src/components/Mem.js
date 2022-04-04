import React from 'react'
import './Mem.css';
function Mem(props) {
    return (
        <div id={props.id} className="mem">
            <h1>{props.name}</h1>
            <img src={props.url} alt={props.name + '-image'} />
        </div>
    )
}

export default Mem