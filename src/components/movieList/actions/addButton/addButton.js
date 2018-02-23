import React from 'react';

const AddButton = props => {
    return (
        <button type="button" className="btn btn-success" onClick={props.click}>Add</button>
    )
};

export default AddButton;