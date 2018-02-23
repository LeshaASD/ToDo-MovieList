import React from 'react';
import './actions.css';
import Input from "./input/input";
import AddButton from "./addButton/addButton";

const Actions = props => {
    return (
            <form className='actions'>
                <div className="form-group">
                    <label className='label'>Movie  </label>
                    <Input text={props.movieName}/>
                    <small id="emailHelp" className="form-text text-muted"><span className='color'>Please add your favorite movie to the list.</span></small>
                </div>
                <AddButton click={props.movieAdd}/>
            </form>
    )
};

export default Actions;
