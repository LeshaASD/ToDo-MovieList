import React from 'react';
import './deleteButton.css';

const DeleteButton = props => {
    return (
        <button type="button" className="btn btn-danger" key={props.id} onClick={props.click}>Delete</button>
    )
};

export default DeleteButton;