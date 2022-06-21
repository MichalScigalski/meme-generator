import React, {useContext} from 'react';
import './Meme.scss';
import { Link } from 'react-router-dom';
import { MemeContext } from '../../context/MemeContext';

const Meme = ({ meme }) => {
    const { setCurrentTemplateContext } = useContext(MemeContext);
    const setTemplateHandler = () => setCurrentTemplateContext(meme) ;
    return (
        <div className='meme' onClick={setTemplateHandler}>
            <Link to='/create' title={meme.name} >
                <div className='meme__imgBox'>
                    <img src={meme.url} alt={meme.name + '-image'} />
                </div>
                <div className='meme__textBox'>
                    <span>{meme.name}</span>
                </div>
            </Link>
        </div>
    )
}

export default Meme