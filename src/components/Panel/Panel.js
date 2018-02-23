import React from 'react';
import './Panel.css';
import {Link} from 'react-router-dom';

const Panel = () => {
    return (
        <div className="App">
            <div className="row">
                <Link to='/toDo' className='btn btn-sm animated-button victoria-one'>To Do</Link>
                <Link to='/movieList' className='btn btn-sm animated-button thar-two'>Movie list</Link>
            </div>
        </div>
    )
};

export default Panel;